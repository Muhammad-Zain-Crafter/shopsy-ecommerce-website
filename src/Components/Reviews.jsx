import React, { useState } from "react";

const Reviews = () => {
  const initialReviews = [
    {
      id: 1,
      name: "Emily Johnson",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "This is the best purchase I've made this year! The quality exceeded my expectations, and the service was outstanding.",
    },
    {
      id: 2,
      name: "Michael Smith",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "Fantastic experience from start to finish. Fast shipping and excellent customer support. Highly recommended!",
    },
    {
      id: 3,
      name: "Sophia Williams",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      review:
        "I absolutely love this product. It has made my life so much easier. I will definitely be coming back for more.",
    },
    {
      id: 4,
      name: "David Lee",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
      review:
        "A top-notch company with high-quality products. The attention to detail is incredible. Thank you!",
    },
    {
      id: 5,
      name: "Olivia Martinez",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      review:
        "Superb! The customer care team went above and beyond to make sure I was satisfied. Highly recommend to everyone.",
    },
    {
      id: 6,
      name: "James Anderson",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      review:
        "I couldn't be happier with my order. The process was seamless, and the product quality is simply outstanding. Five stars!",
    },
  ];

  const [reviews, setReviews] = useState(initialReviews);

  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newReview, setNewReview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setNewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (newName && newImage && newReview) {
      const newReviewObj = {
        id: Date.now(),
        name: newName,
        image: newImage,
        review: newReview,
      };
      setReviews([...reviews, newReviewObj]);
      setNewName("");
      setNewImage("");
      setNewReview("");
    } else {
      alert("Please fill in all fields.");
    }
  };
  return (
    <div className="pb-16">
      {/* Header */}
      <div className="mt-16 flex flex-col justify-center items-center">
        <p className="text-orange-300 font-semibold text-[12px]">
          What our customers say
        </p>
        <h1 className="font-bold md:text-4xl text-2xl text-center">
          Customer Reviews & Testimonials
        </h1>
        <p className="text-gray-500 text-center max-w-2xl">
          Discover why people choose us again and again. Read real stories from
          our valued customers.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-[1340px] m-2">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-lg p-5 text-center shadow-xl border-0 bg-gradient-to-br from-orange-400 via-red-400 to-amber-300 text-white"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="mb-4 italic">"{review.review}"</p>
            <h3 className="font-semibold text-lg">{review.name}</h3>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-[500px] mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Submit Your Review
        </h2>
        <form onSubmit={handleAddReview} className="space-y-4 h-auto">
          <input
            type="text"
            placeholder="Your Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            placeholder="Your Review"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-xl hover:bg-orange-600"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
