import React, { useEffect, useState } from "react";
import shirt1 from "../assets/shirt/shirt.png";
import shirt2 from "../assets/shirt/shirt2.png";
import shirt3 from "../assets/shirt/shirt3.png";
import { StarIcon } from "@heroicons/react/20/solid";

const TopRated = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [modalOpen, setMNodalOpen] = useState(false);

  useEffect(() => {
    if (submitted) {
      alert(`Subscribed!`);
      setSubmitted(false);
    }
  }, [submitted]);

  function handleSubscribe() {
    if (email.trim() !== "") {
      setSubmitted(true);
    } else {
      alert("Enter valid email!");
    }
    setEmail("");
  }

  const products = [
    {
      title: "Casual Wear",
      description:
        "Effortless style meets everyday comfort. This casual shirt is perfect for laid-back.",
      image: shirt1,
      rating: 5,
    },
    {
      title: "Printed Shirt",
      description:
        "Stand out with bold, modern prints. This shirt brings energy to your outfit.",
      image: shirt2,
      rating: 4,
    },
    {
      title: "Women Shirt",
      description:
        "Soft, stylish, and designed to flatter. This women’s shirt blends classic charm.",
      image: shirt3,
      rating: 4,
    },
  ];
  return (
    <div>
      <div className="mt-16 md:ml-0 ml-4 relative md:left-24 max-w-[380px] flex flex-col ">
        <p className="text-orange-300 font-semibold text-[12px]">
          Trending products
        </p>
        <h1 className="font-bold md:text-4xl text-2xl">Top rated products</h1>
        <p className="text-gray-500">
          Discover our most highly rated products handpicked by shoppers just
          like you.
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center mt-24 md:gap-6 gap-24">
        {products.map((product, index) => (
          <div key={index}>
            <div className="relative bg-gray-50 flex flex-col items-center p-2 gap-1 border-0 shadow-xl pt-20 pb-6 px-4 w-72 mx-auto md:hover:bg-black rounded-xl md:hover:text-white">
              <img
                className="w-40 h-40 object-contain absolute -top-16"
                src={product.image}
                alt=""
              />
              <span className="flex justify-center mb-2 mt-6">
                {Array(product.rating)
                  .fill()
                  .map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
              </span>
              <h1 className="font-bold">{product.title}</h1>
              <p className="text-sm">{product.description}</p>
              <button
                onClick={() => setMNodalOpen(true)}
                className="bg-orange-500 text-white font-semibold p-1 px-4 rounded-xl md:hover:bg-amber-400 mt-2"
              >
                Order now
              </button>
              {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white md:p-6 p-4 rounded-lg w-80 relative">
                    <button
                      className="absolute top-2 right-2 text-gray-800 hover:text-black text-4xl"
                      onClick={() => setMNodalOpen(false)}
                    >
                      &times;
                    </button>
                    <h2 className="text-xl text-black font-semibold mb-4">
                      Order Now
                    </h2>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        alert("Order placed successfully!");
                        setMNodalOpen(false);
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
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <div className="mt-14 max-w-[900px] flex flex-col gap-4 items-center justify-center bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-400 h-[150px] px-6 ">
          <h1 className="text-white md:text-2xl text-xl font-bold">
            Get notified about new products
          </h1>
          <div className="space-x-3">
            <input
              className="border-0 bg-white md:text-xl text-sm p-1 md:w-60 w-54"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubscribe}
              className="bg-white text-orange-600 font-semibold p-1 px-2 md:text-xl text-sm rounded-xl hover:bg-gray-100"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
