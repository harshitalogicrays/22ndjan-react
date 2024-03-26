import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyApvuyrGcoR7PAK_IbgQUGmK7EwqAA3mnA",
  authDomain: "ndjan-ecommerce.firebaseapp.com",
  projectId: "ndjan-ecommerce",
  storageBucket: "ndjan-ecommerce.appspot.com",
  messagingSenderId: "1078158699425",
  appId: "1:1078158699425:web:2e7b33f25b24a0a925f9e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app)
export default app
