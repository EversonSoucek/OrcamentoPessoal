import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // Importar o Firestore

const firebaseConfig = {
    apiKey: "AIzaSyCo0ZFeTQ9pXEX0vxWh87j6DrerfL9X59k",
    authDomain: "orcamentopessoal-665b2.firebaseapp.com",
    projectId: "orcamentopessoal-665b2",
    storageBucket: "orcamentopessoal-665b2.appspot.com",
    messagingSenderId: "519836250059",
    appId: "1:519836250059:web:096b9bb3ee8c658274504e"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Autenticação e Firestore
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);  // Inicializar o Firestore

export { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, db };
