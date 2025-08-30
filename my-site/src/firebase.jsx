import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs} from "firebase/firestore";


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


// for gettign datat of a specific item, maybe usuful for item pages
// const getItemData = async (id) => {
//   const docRef = doc(db, 'products', id);
//   const docSnap = await getDoc(docRef);
//   return docSnap.exists()? docSnap.data(): null;

// }

const getAllItemsData = async() => {
  const docRef = collection(db, 'products');
    const docSnap = await getDocs(docRef);
    return docSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

}

// export {getItemData}
export {getAllItemsData}