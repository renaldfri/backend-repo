import * as admin from 'firebase-admin';
import serviceAccount from "./serviceAccount.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

export const auth = admin.auth();
export const db = admin.firestore();
