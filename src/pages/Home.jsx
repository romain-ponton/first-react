import { useState, useEffect } from "react";
import Button from "../components/button.jsx";
import Compteur from "../components/compteur.jsx";

function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Le compteur a été mis à jour :", count);
  }, [count]); 
  return (
    <>
      <h1>Page d’accueil</h1>
      <Button onClick={() => setCount(count + 1)} />
      <Compteur count={count} />
    </>
  );
}

export default Home;
