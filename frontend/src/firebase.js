import { initializeApp } from "firebase/app"
// import "firebase/firebase-storage"
import { getFirestore, serverTimestamp } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp(
    {
      apiKey: "AIzaSyBHwvJWC_BQOKujTGKZ5ufBdreOZ6yWVuo",
      authDomain: "pizza-order-169c8.firebaseapp.com",
      projectId: "pizza-order-169c8",
      storageBucket: "pizza-order-169c8.appspot.com",
      messagingSenderId: "668189130583",
      appId: "1:668189130583:web:e7de0b6b64b68d60380812",
      measurementId: "G-KDYEY6MXD5"
    }
);

 export const firestore = getFirestore(firebaseApp)
 export const auth = getAuth(firebaseApp)
export const storage = getStorage(firebaseApp)
 export const db={
    pizzas:'allProducts',
    
    formatedDoc:doc=>{
      return{id:doc.id,...doc.data()}
    },
    getCurrentTimeStamp:serverTimestamp,
  }