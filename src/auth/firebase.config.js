import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCZTzoRfffmgGdZNVN-ooKSX4eGOQ5As0I",
    authDomain: "bite-cafe.firebaseapp.com",
    projectId: "bite-cafe",
    storageBucket: "bite-cafe.appspot.com",
    messagingSenderId: "750049759640",
    appId: "1:750049759640:web:1720daf75bd36bf6e05bed"
}

export const app = initializeApp(firebaseConfig)