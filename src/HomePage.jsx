import React, {useState} from "react"; 
import pogBanner from "./assets/pog-banner.png";

const DEFAULT_POGS = [
    {
        id: 1,
        name: "Metal Slammers",
        price: 9.99,
        image: "src/assets/pog-slammer.png",
        description: "Heavy-duty Metal Slammers for intense Pog battles."
      },
      {
        id: 2,
        name: "Pog Carrying Case",
        price: 14.99,
        image: "src/assets/pog-tube.png",
        description: "Keep your Pogs safe with this stylish carrying tube."
      },
      {
        id: 3,
        name: "Dungeons & Dragons Pog Pack",
        price: 7.99,
        image: "src/assets/dnd-pogs.png",
        description: "These Dungeons & Dragons pogs feature art from the covers of various Dungeons & Dragons books. On the back of each pog it has the name of the artwork / book and the artist's name."
      },
      {
        id: 4,
        name: "Space Jam Pog Pack",
        price: 6.99,
        image: "src/assets/spacejam-pogs.png",
        description: "This set of pogs features various characters from the 1996 film Space Jam. They would have been given away with yoghurts sold by Danone."
      },
      {
        id: 5,
        name: "Nintendo Pog Pack",
        price: 8.99,
        image: "src/assets/nintendo-pogs.png",
        description: "The Nintendo Greatest Games of All Time pogs come in a sheet of card with 8 caps cut into it. The back of the card and caps is blank."
      },
      {
        id: 6,
        name: "Casper Pog Pack",
        price: 9.49,
        image: "src/assets/casper-pogs.png",
        description: "These Casper pogs / milkcaps were released in 1995 to tie in with the release of the film 'Casper'. The pogs feature scenes and characters from the film."
      }
    ];

function HomePage() {
    const [pogs, setPogs] = useState(DEFAULT_POGS);

    return (
        <>
            <div className="relative">
            <img src={pogBanner} alt="Pog Banner" className="w-full h-auto object-cover brightness-50" />
            <header className="absolute inset-0 flex items-center justify-center text-white">
                <h1 className="font-hanalei text-9xl"> The Pog Vault </h1>
            </header>
            </div>

            <main className="p-5 bg-gray-400">
                
                <h2 className="font-poppins text-4xl mt-4 font-bold">Our Pog Store</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {pogs.map((pog) => (
                        <li key={pog.id} className="border p-4 rounded-lg bg-white flex flex-col justify-between">
                            <img src={pog.image} alt={pog.name} className="w-full h-80 object-cover mb-2" />
                            <div className="flex flex-col justify-between flex-grow">
                                <div>
                                <h3 className="font-poppins text-xl">{pog.name}</h3>
                                <p className="text-gray-400">{pog.description}</p>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                <p className="text-green-700 font-bold">${pog.price.toFixed(2)}</p>
                                <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">Buy Now</button>
                                </div>
                            </div>
                        </li>
                    ))}
                    </ul>
            </main>
            <footer className="text-center bg-green-900 text-white p-2">
                <p>&copy; 2024 Pog Store</p>
            </footer>
        </>
    );
}

export default HomePage;