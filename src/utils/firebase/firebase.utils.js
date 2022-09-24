import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {

  apiKey: "AIzaSyAQgPjKIzt3Uayc4yCkJy4qePSqZRdXS9A",

  authDomain: "uncrown-clothing.firebaseapp.com",

  projectId: "uncrown-clothing",

  storageBucket: "uncrown-clothing.appspot.com",

  messagingSenderId: "965461962235",

  appId: "1:965461962235:web:9f76b6477edc07bf0daf5e"

};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);