// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [randomDog, setRandomDog] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      setRandomDog(data.message);
    });
  }, []);

  if (!randomDog) return <h3>Loading...</h3>

  return <img src={randomDog} alt="A Random Dog" />;
}

export default App;