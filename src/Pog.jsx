import React from "react";
import IonIcon from "@reacticons/ionicons";

function Pog({ pog, favorites, handleFavClick }) {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden relative flex flex-col">
      {/* Favorite button */}
      <button 
        className="absolute top-2 right-2 text-5xl"
        onClick={() => handleFavClick(pog.id)} 
      >
        {favorites.includes(pog.id) ? (
          <IonIcon name="heart" className="text-pink-500" />
        ) : (
          <IonIcon name="heart-outline" className="text-pink-500" />
        )}
      </button>

      {/* Product Info */}
      <img 
        src={pog.image} 
        alt={pog.name} 
        className="w-full h-64 object-cover" 
      />
      <div className="p-4 flex-grow">
        <h3 className="font-semibold">{pog.name}</h3>
        <p className="text-gray-500 mb-4">{pog.description}</p>
      </div>

      {/* Price and Add To Cart button */}
      <div className="flex items-center justify-between p-4 mt-auto">
        <p className="text-green-700 font-bold">${pog.price.toFixed(2)}</p>
        <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Pog;