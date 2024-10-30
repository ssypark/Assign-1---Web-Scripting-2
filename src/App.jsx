import React, { useEffect, useState } from "react";
import './index.css';
import Pog from "./Pog";
import pogBanner from "./assets/pog-banner.png";
import pogSlammer from "./assets/pog-slammer.png";
import pogTube from "./assets/pog-tube.png";
import dndPogs from "./assets/dnd-pogs.png";
import spaceJamPogs from "./assets/spacejam-pogs.png";
import nintendoPogs from "./assets/nintendo-pogs.png";
import casperPogs from "./assets/casper-pogs.png";
import IonIcon from "@reacticons/ionicons";

const DEFAULT_POGS = [
  {
    id: 1,
    name: "Metal Slammers",
    price: 2.99,
    image: pogSlammer,
    description: "Heavy-duty Metal Slammers for intense Pog battles."
  },
  {
    id: 2,
    name: "Pog Carrying Case",
    price: 3.99,
    image: pogTube,
    description: "Keep your Pogs safe with this stylish carrying tube."
  },
  {
    id: 3,
    name: "Dungeons & Dragons Pog Pack",
    price: 7.99,
    image: dndPogs,
    description: "These Dungeons & Dragons pogs feature art from the covers of various Dungeons & Dragons books. On the back of each pog it has the name of the artwork / book and the artist's name."
  },
  {
    id: 4,
    name: "Space Jam Pog Pack",
    price: 6.99,
    image: spaceJamPogs,
    description: "This set of pogs features various characters from the 1996 film Space Jam. They would have been given away with yoghurts sold by Danone."
  },
  {
    id: 5,
    name: "Nintendo Pog Pack",
    price: 8.99,
    image: nintendoPogs,
    description: "The Nintendo Greatest Games of All Time pogs come in a sheet of card with 8 caps cut into it. The back of the card and caps is blank."
  },
  {
    id: 6,
    name: "Casper Pog Pack",
    price: 9.49,
    image: casperPogs,
    description: "These Casper pogs / milkcaps were released in 1995 to tie in with the release of the film 'Casper'. The pogs feature scenes and characters from the film."
  }
];

function App() {
  const [pogs, setPogs] = useState(DEFAULT_POGS);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  // Toggle favorite status for products
  const handleFavClick = (pogId) => {
    let updatedFavorites;
    if (favorites.includes(pogId)) {
      updatedFavorites = favorites.filter((fav) => fav !== pogId);
    } else {
      updatedFavorites = [...favorites, pogId];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="relative">
        <img src={pogBanner} alt="Pog Banner" className="w-full h-auto object-cover brightness-50" />
        <header className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="font-hanalei text-9xl text-white drop-shadow-xl"> The Pog Vault </h1>
        </header>
      </div>

      <main className="p-5 bg-cyan-950">

        <h2 className="font-hanalei text-6xl mt-4 mb-2 text-white drop-shadow-lg">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {pogs.map((pog) => (
            <Pog
              key={pog.id}
              pog={pog}
              favorites={favorites}
              handleFavClick={handleFavClick}
            />
          ))}
        </div>
      </main>
      <footer className="text-center bg-stone-900 text-white p-2">
        <p>&copy; 2024 Pog Store</p>
      </footer>
    </div>
  );
}

export default App;