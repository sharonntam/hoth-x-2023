import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCtQ6j-jK_ljCqfwPYXn63tKjsTifPtwtQ",
    authDomain: "hoth-2023.firebaseapp.com",
    databaseURL: "https://hoth-2023-default-rtdb.firebaseio.com",
    projectId: "hoth-2023",
    storageBucket: "hoth-2023.appspot.com",
    messagingSenderId: "900147615306",
    appId: "1:900147615306:web:8088add90e0065203378b3",
    measurementId: "G-M31BVF8ZXZ"
}

if(!firebase.apps.length){
    const app = initializeApp(firebaseConfig);
}

export default firebase;