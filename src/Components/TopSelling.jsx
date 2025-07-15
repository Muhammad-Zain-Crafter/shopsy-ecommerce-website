import React from "react";
import women1 from "../assets/women/women.png";
import women2 from "../assets/women/women2.jpg";
import women3 from "../assets/women/women3.jpg";
import women4 from "../assets/women/women4.jpg";
import { useNavigate } from "react-router-dom";

const TopSelling = () => {
  const navigate = useNavigate();
  const cards = [
    {
      image: women1,
      title: "Women ethinic",
      color: "blue",
      rating: 4.5,
    },
    {
      image: women2,
      title: "Women western",
      color: "brown",
      rating: 4.3,
    },
    {
      image: women3,
      title: "Printed T-shirt",
      color: "white",
      rating: 5,
    },
    {
      image: women4,
      title: "Fashin T-shirt",
      color: "red",
      rating: 4.7,
    },
  ];

  return (
    <div>
      <div className="mt-16 flex flex-col justify-center items-center">
        <p className="text-orange-300 font-semibold text-[12px] ">
          Top selling products for you
        </p>
        <h1 className="font-bold md:text-4xl text-2xl text-center">
          Top Selling Products
        </h1>
        <p className="text-gray-500 text-center">
          Shop our best sellers and find customer favorites that combine style
          and quality.
        </p>
      </div>
      <div className="w-full flex flex-col group items-center md:flex-row justify-center mt-14 gap-10">
        {cards.map((card, index) => (
          <div key={index}>
            <div className="flex flex-col gap-2 border-2 transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100 bg-white shadow-xl p-4 rounded-xl w-60">
              <img
                className="h-52 w-52 ml-0.5 rounded object-fit"
                src={card.image}
                alt="women1"
              />
              <h1 className="font-bold">{card.title}</h1>
              <p className="text-gray-500">{card.color}</p>
              <div className="">
                <p className="font-semibold">
                  {" "}
                  <span>⭐</span> {card.rating}{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <center>
        <button
          onClick={() => navigate("/products")}
          className="p-4 text-sm bg-orange-400 text-white font-bold rounded-xl mt-12
             md:w-48 md:hover:bg-amber-400">
          View All Products
        </button>
      </center>
    </div>
  );
};

export default TopSelling;
