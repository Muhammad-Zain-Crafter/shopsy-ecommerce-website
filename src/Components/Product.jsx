import React, { useContext, useState } from "react";
import women1 from "../assets/women/women.png";
import women2 from "../assets/women/women2.jpg";
import women3 from "../assets/women/women3.jpg";
import women4 from "../assets/women/women4.jpg";
import shirt1 from "../assets/shirt/shirt.png";
import shirt2 from "../assets/shirt/shirt2.png";
import shirt3 from "../assets/shirt/shirt3.png";
import shirt4 from "../assets/shirt/shirt4.jpeg";
import shirt5 from "../assets/shirt/shirt5.jpeg";

const Product = ({ addToCart }) => {
  const allProducts = [
    {
      id: 1,
      image: women1,
      title: "Women Ethnic",
      color: "Blue",
      rating: 4.5,
      price: 25,
    },
    {
      id: 2,
      image: women2,
      title: "Women Western",
      color: "Brown",
      rating: 4.3,
      price: 30,
    },
    {
      id: 3,
      image: women3,
      title: "Printed T-Shirt",
      color: "White",
      rating: 5,
      price: 34,
    },
    {
      id: 4,
      image: women4,
      title: "Fashion T-Shirt",
      color: "Red",
      rating: 4.7,
      price: 32,
    },
    {
      id: 5,
      image: shirt1,
      title: "Casual Shirt",
      color: "Black",
      rating: 4.8,
      price: 40,
    },
    {
      id: 6,
      image: shirt2,
      title: "Printed Shirt",
      color: "Green",
      rating: 4.6,
      price: 36,
    },
    {
      id: 7,
      image: shirt3,
      title: "Women Shirt",
      color: "Pink",
      rating: 4.9,
      price: 28,
    },
    {
      id: 8,
      image: shirt4,
      title: "Classic Polo",
      color: "Navy Blue",
      rating: 4.4,
      price: 40,
    },
    {
      id: 9,
      image: shirt5,
      title: "Linen Shirt",
      color: "Beige",
      rating: 5,
      price: 45,
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="mt-16 p-4">
      <div className="flex flex-col items-center">
        <p className="text-orange-300 font-semibold text-[12px]">
          Explore our collection
        </p>
        <h1 className="font-bold md:text-4xl text-2xl text-center">
          All Products
        </h1>
        <p className="text-gray-500 text-center max-w-2xl">
          Browse all our products in one place and discover your next favorite
          purchase.
        </p>
      </div>

      <div className="grid md:grid-cols-3 py-2 gap-6 mt-12 max-w-[1340px] mx-auto bg-slate-50">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-2 border-2 bg-white shadow-xl p-4 rounded-xl w-60 mx-auto transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img
              className="h-52 w-52 rounded object-cover"
              src={product.image}
              alt={product.title}
            />
            <h1 className="font-bold">{product.title}</h1>
            <p className="text-gray-500">{product.color}</p>

            <div className="flex flex-row gap-28 font-semibold">
              <p className="font-semibold">
                <span>⭐</span> {product.rating}
              </p>
              <p className="">{product.price}$</p>
            </div>
            <div className="flex flex-row gap-7">
              <button
                onClick={() => setSelectedProduct(product)}
                className="bg-orange-500 text-white font-semibold text-sm py-1 px-2 rounded-lg mt-2 hover:bg-amber-400"
              >
                Order Now
              </button>
              <button
                onClick={() => {
                  addToCart(product);
                  alert(`${product.title} added to cart!`);
                }}
                className="bg-green-500 text-white font-semibold text-sm py-1 px-2 rounded-lg mt-2 hover:bg-green-400
              "
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white md:p-6 p-4 rounded-lg w-80 relative">
            <button
              className="absolute top-2 right-2 text-gray-800 hover:text-black text-4xl"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
            <h2 className="text-xl text-black font-semibold mb-4">
              Order: {selectedProduct.title}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  `Order for "${selectedProduct.title}" placed successfully!`
                );
                setSelectedProduct(null);
              }}
              className="space-y-3 text-black"
            >
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Address"
                required
                className="w-full border p-2 rounded"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold py-2 rounded-xl hover:opacity-90"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
