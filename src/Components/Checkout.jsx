import React, { useEffect, useState } from "react";

const Checkout = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setFullName("");
    setAddress("");
    setPaymentMethod("");
  }
  return (
    <div className="min-h-screen p-6 bg-slate-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-xl"
      >
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Shipping Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value={""}>Select payment method</option>
            <option>Cash on Delivery</option>
            <option>Credit Card</option>
          </select>
        </div>
        <button
          type="submit"
          onClick={() => {}}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Place Order
        </button>
      </form>
      {submitted && (
        <h1 className="mt-4 text-lg font-medium">Order placed successfully!</h1>
      )}
    </div>
  );
};

export default Checkout;