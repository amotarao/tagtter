import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore/memory';

const config = {
  apiKey: process.env.NUXT_ENV_FIREBASE_API_KEY,
  authDomain: process.env.NUXT_ENV_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NUXT_ENV_FIREBASE_DATABASE_URL,
  projectId: process.env.NUXT_ENV_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NUXT_ENV_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NUXT_ENV_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NUXT_ENV_FIREBASE_APP_ID,
  measurementId: process.env.NUXT_ENV_FIREBASE_MEASUREMENT_ID,
};

const app = firebase.apps.length > 0 ? firebase.app() : firebase.initializeApp(config);

const auth = app.auth();
const firestore = app.firestore();

const providers = {
  twitter: new firebase.auth.TwitterAuthProvider(),
};

export { auth, firestore, providers };
