import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart, increaseQty, decreaseQty }) => {
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="p-6 min-h-screen bg-slate-100">
      <div className="flex flex-row items-center justify-center gap-2">
        <ShoppingCartIcon className="w-10 h-10" />
        <h1 className="text-2xl mt-4 font-bold mb-6"> Your Cart</h1>
      </div>
      {cartItems.length === 0 ? (
        <center>
          <h1 className="text-gray-600 text-lg">Your cart is empty.</h1>
        </center>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 rounded object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                  <p className="text-gray-700">
                    Price: ${item.price} × {item.quantity} ={" "}
                    <span className="font-bold">
                      ${item.price * item.quantity}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center md:gap-4 gap-2">
                <button
                  onClick={() => increaseQty(item.id)}
                  className="text-2xl text-red-600"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 px-3 py-1 text-xl"
                >
                  <FaTrash />
                </button>
                <button
                  onClick={() => {
                    decreaseQty(item.id);
                  }}
                  className="text-4xl text-red-600 mb-1"
                >
                  -
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-8">
            <h2 className="text-2xl font-bold">
              Total: <span className="text-green-600">${totalPrice}</span>
            </h2>
            <button onClick={() => navigate('/checkout')}
            className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
