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
      storageBucket: "gs://whatsapp-clone-84974.firebasestorage.app",
      messagingSenderId: "618288756836",
      appId: "1:618288756836:web:07e6799b7f2227122b0771",
    };

    this.init();
  }

  init() {
    if (!window._initializedFirebase) {
      Firebase._app = firebase.initializeApp(this._config);

      window._initializedFirebase = true;
    }
  }

  static db() {
    return getFirestore();
  }

  static hd() {
    return getStorage();
  }

  init() {
    if (!window._initializedFirebase) {
      Firebase._app = firebase.initializeApp(this._config);

      window._initializedFirebase = true;
    }
  }

  static db() {
    return firebase.firestore();
  }

  static hd() {
    return firebase.storage();
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
