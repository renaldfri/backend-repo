import * as admin from 'firebase-admin';

import serviceAccount from "./serviceAccount.json";

if (process.env.FIREBASE_EMULATOR) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: process.env.FIREBASE_PROJECT_ID,
  });
} else {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
  });
}

export const auth = admin.auth();
export const db = admin.firestore();
