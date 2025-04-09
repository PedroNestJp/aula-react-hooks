import { useState, useEffect } from "react";
import DogCard from "../components/DogCard";
import "../styles/DogsGallery.css";

export default function DogGallery() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/6")
      .then((res) => res.json())
      .then((data) => {
        setDogs(data.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando doguinhos... 🐾</p>;

  return (
    <div className="container">
      <h1>Dog Gallery</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {dogs.map((dog, index) => (
          <DogCard key={index} image={dog} />
        ))}
      </div>
      <DogCard image={dogs[0]} />
      <button
        onClick={() => {
          setLoading(true);
          fetch("https://dog.ceo/api/breeds/image/random/3")
            .then((res) => res.json())
            .then((data) => {
              setDogs(data.message);
              console.log(data);
              setLoading(false);
            });
        }}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Carregar mais doguinhos
      </button>
    </div>
  );
}
