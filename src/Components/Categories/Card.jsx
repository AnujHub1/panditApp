import React from "react";
import pujan from "/pujan.png";
import { Link } from "react-router-dom";

export default function Card() {
  const cardsData = Array(9).fill({
    title: "Graph Pravesh ( गृह प्रवेश)",
    description:
      "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps.",
    image: pujan,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-mono text-center text-2xl md:text-3xl font-bold py-4">
        Categories of Pooja
      </h1>
      <div className="flex flex-wrap justify-between gap-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col h-[200px] w-[440px] sm:flex-row justify-between items-center gap-4 border shadow-lg shadow-slate-400 overflow-hidden rounded-2xl"
          >
            <img src={card.image} alt="Puja" className="p-1" />
            <div className="p-2 flex flex-col justify-center">
              <h1 className="font-bold text-base ">{card.title}</h1>
              <p className="py-2 text-sm sm:text-base">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" text-white p-4 flex justify-center w-full">
        <Link
          to="/show"
          className="bg-red-500 py-2 text-center w-96 rounded-sm"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
