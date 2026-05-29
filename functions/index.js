require("dotenv").config();
const {setGlobalOptions} = require("firebase-functions");
const functions = require("firebase-functions/v1");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

setGlobalOptions({maxInstances: 10});

const encode64 = (input) => {
  return Buffer.from(escape(input), "utf8").toString("base64");
};

const decode64 = (input) => {
  return unescape(Buffer.from(input, "base64").toString("utf8"));
};

exports.saveLastMessage = functions.firestore
    .document(`/chats/{chatId}/messages/{messageId}`)
    .onCreate((snap, context) => {
      const chatId = context.params.chatId;
      const messageId = context.params.messageId;

      const messageDoc = snap.data();
      const userFrom = messageDoc.from;
      const chatRef = db.collection("chats").doc(chatId);

      return chatRef.get().then((snapChat) => {
        const chatDoc = snapChat.data();

        const userTo = Object.keys(chatDoc.users).filter((key) => {
          return key !== encode64(userFrom);
        })[0];

        const updateReceiver = db
            .collection("users")
            .doc(decode64(userTo))
            .collection("contacts")
            .doc(encode64(userFrom))
            .set(
                {
                  lastMessage: messageDoc.content,
                  lastMessageTime: new Date(),
                },
                {merge: true},
            );

        const updateSender = db
            .collection("users")
            .doc(userFrom)
            .collection("contacts")
            .doc(userTo)
            .set(
                {
                  lastMessage: messageDoc.content,
                  lastMessageTime: new Date(),
                },
                {merge: true},
            );

        return Promise.all([updateReceiver, updateSender]);
      });
    });
