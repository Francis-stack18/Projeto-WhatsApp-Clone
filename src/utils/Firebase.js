import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";

export class Firebase {
  constructor() {
    this._config = {
      apiKey: "AIzaSyDPKNo4c_0l84RLdyCMmjlf7OLIbjK61Ag",
      authDomain: "whatsapp-clone-84974.firebaseapp.com",
      projectId: "whatsapp-clone-84974",
      storageBucket: "whatsapp-clone-84974.firebasestorage.app",
      messagingSenderId: "618288756836",
      appId: "1:618288756836:web:07e6799b7f2227122b0771",
    };

    this.init();
  }

  init() {
    if (!this._initialized) {
      firebase.initializeApp(this._config);

      firebase.firestore().settings({
        timestampsInSnapshots: true,
      });

      this._initialized = true;
    }
  }

  static db() {
    return getFirestore();
  }

  static hd() {
    return getStorage();
  }

  initAuth() {
    return new Promise((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let token = result.credential.accessToken;
          let user = result.user;
          resolve({ user, token });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
