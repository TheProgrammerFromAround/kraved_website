import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAGQBh3aUmfh3bUWDiLj4lsRGuUI5VjlPc",
  authDomain: "kraved.firebaseapp.com",
  projectId: "kraved",
  storageBucket: "kraved.firebasestorage.app",
  messagingSenderId: "571972665961",
  appId: "1:571972665961:web:d2cf8be9fe49daddd6d8f8",
  measurementId: "G-B182M3WD3W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getItemData = async () => {
  const docRef = doc(db, 'products', 'Item1');
  const docSnap = await getDoc(docRef);
  return docSnap.data();

}

export {getItemData}