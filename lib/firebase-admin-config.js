import { initializeApp, getApps, cert } from "firebase-admin/app";

const firebaseAdminConfig = {
  credential: cert({
    projectId: "cafe-de-altura-nextjs",
    clientEmail:
      "firebase-adminsdk-lo9lz@cafe-de-altura-nextjs.iam.gserviceaccount.com",
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
  }),
};

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }
}
// Leverage admin SDK functions as needed
