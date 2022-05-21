import './App.css';
import { useState, useEffect } from 'react'
import { Codaynta } from './components/Codaynta';
import { Home } from './components/Home';

import { addDoc, getDocs, collection } from "firebase/firestore";
import { db, auth, googleProvider } from "./firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";

function App() {

  // States
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [codkaKaDib, setCodkaKaDib] = useState("");

  const [najiijada, setNatiijada] = useState([]);

  // const [codadkaFarmajo, setCodadkaFarmajo] = useState(0);
  // const [codadkaKhayre, setCodadkaKhayre] = useState(0);
  // const [codadkaXasan, setCodadkaXasan] = useState(0);
  // const [codadkaDani, setCodadkaDani] = useState(0);


  // sign in
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    });
  };

  // Sign Out
  const signUserOut = (e) => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    });
  };

  // collection ref
  const codkaCollectionRef = collection(db, "codka");

  // Codaynta
  const codee = async (magaca) => {
    await addDoc(codkaCollectionRef, {
      magaca,
    });

    setCodkaKaDib(`Xildhibaan ${auth.currentUser.displayName} Wuu Codeeyay!`);

    // signOut
    signUserOut();

  };


  const natiijadaCodka = async () => {
    const data = await getDocs(codkaCollectionRef)
    setNatiijada(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

  }

  natiijadaCodka();


  let codadkaFarmajo = 0;
  let codadkaKhayre = 0;
  let codadkaXasan = 0;
  let codadkaDani = 0;

  najiijada.map((doc) => {
    // isu gaynta conda Farmajo
    if (doc.magaca === "Maxamed Cabdilahi Farmajo") {
      codadkaFarmajo ++;
    }
    // isu gaynta conda Khayre
    if (doc.magaca === "Xasan Cali Khayre") {
      codadkaKhayre ++;
    }
    // isu gaynta conda Xasan Sheekh
    if (doc.magaca === "Xasan Sheekh Maxamuud") {
      codadkaXasan ++;
    }
    // isu gaynta conda Dani
    if (doc.magaca === "Saciid Cabdilahi Dani") {
      codadkaDani ++;
    }
  })
  useEffect(() => {

  }, [isAuth]);



  console.log(najiijada);



  return (
    <>
      {!isAuth ? (
        <>
          <Home
            signInWithGoogle={signInWithGoogle}
            codkaKaDib={codkaKaDib}

            codadkaFarmajo={codadkaFarmajo}
            codadkaKhayre={codadkaKhayre}
            codadkaXasan={codadkaXasan}
            codadkaDani={codadkaDani}
          />
        </>
      ) : (
        <Codaynta codee={codee} />
      )}
    </>
  );
}

export default App;
