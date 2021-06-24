import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDJtryxbFN32ypqtxv5ZJIvewUCU16S3nU",
  authDomain: "crwn-db-cc4db.firebaseapp.com",
  projectId: "crwn-db-cc4db",
  storageBucket: "crwn-db-cc4db.appspot.com",
  messagingSenderId: "791133677247",
  appId: "1:791133677247:web:171ea2a1bee1ff1355480a",
  measurementId: "G-6VD2ZT4Z9Z",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
