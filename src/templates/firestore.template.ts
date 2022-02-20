import { Config } from "../interfaces/buildBase.interface";
import { translate } from "../util/buildBase/buildBase";
import { Generator } from "../interfaces/template.interface";

const generate = (config: Config) => {
  const template = `
    import { initializeApp } from 'firebase/app';
    import { getFirestore } from 'firebase/firestore';
    
    const firebaseConfig = {
      apiKey: process.env['NX_FIREBASE_API_KEY'],
      authDomain: process.env['NX_FIREBASE_AUTH_DOMAIN'],
      databaseURL: process.env['NX_FIREBASE_DB_URL'],
      projectId: process.env['NX_FIREBASE_PROJECT_ID'],
      storageBucket: process.env['NX_FIREBASE_STORAGE_BUCKET'],
      messagingSenderId: process.env['NX_FIREBASE_MESSAGING_SENDER_ID'],
      appId: process.env['NX_FIREBASE_APP_ID'],
    };
    
    initializeApp(firebaseConfig);
    
    export const db = getFirestore();

    /* 
      Add an .env file which connects to firestore

      NX_FIREBASE_API_KEY=
      NX_FIREBASE_AUTH_DOMAIN=
      NX_FIREBASE_DB_URL=
      NX_FIREBASE_PROJECT_ID=
      NX_FIREBASE_STORAGE_BUCKET=
      NX_FIREBASE_MESSAGING_SENDER_ID=
      NX_FIREBASE_APP_ID=
    */
  `

  return {
    template: translate(template,config),
    title: `Firebase Configuration`,
    fileName: `libs/data/src/lib/conf/firebase.config.ts`,
  };
};

export const CliGenerator: Generator = {
  generate,
};
