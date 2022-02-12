// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { useEffect, useState } from "react";
import { Project } from "../pages/in/shelf";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA85GR2b4hPB-InCB7npcOH_c07e3jUA7Q",
  authDomain: "project-shelf-a1da4.firebaseapp.com",
  projectId: "project-shelf-a1da4",
  storageBucket: "project-shelf-a1da4.appspot.com",
  messagingSenderId: "277507151132",
  appId: "1:277507151132:web:17cbbeebc097d6d847d6d9",
  measurementId: "G-HF62TNEGJ2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export function useAuth() {
  const auth = getAuth(app)
  const [authState, setAuth] = useState(auth)

  useEffect(() => {
    setAuth(getAuth(app))
  }, [])

  return authState;
}


import {collection, query, where, getDocs, getFirestore} from "firebase/firestore"

export async function getProjects(){
  const db = getFirestore(app)
  const queryReq = query(collection(db, "public_projects"), where("authorUid", "==", getAuth(app).currentUser?.uid))
  const querySnapshot = await getDocs(queryReq)
  
  let result: Project[] = []
  querySnapshot.forEach((doc) => {
    result.push(doc.data() as Project) 
  })

  return result;
}