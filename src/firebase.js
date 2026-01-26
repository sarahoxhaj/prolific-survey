import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxqNjPPyXHBk-uk_DDKRbW2k_zQFJ_RPM",
  authDomain: "prolific-survey-d0d1d.firebaseapp.com",
  projectId: "prolific-survey-d0d1d",
  storageBucket: "prolific-survey-d0d1d.firebasestorage.app",
  messagingSenderId: "177520552326",
  appId: "1:177520552326:web:3759db855987be68b7a407",
  measurementId: "G-3SRZLDP81E",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
