// src/Components/HeroSlider.jsx
import Slider from "react-slick";
import womenImage from "../assets/hero/women.png";
import menImage from "../assets/hero/sale.png";
import shopImg from "../assets/hero/shopping.png";
import img from "../assets/women/women2.jpg";

const Home = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    pauseOnHover: false,
  };

  const slides = [
    {
      title: "30% off on Women's Wear",
      description:
        "Refresh your wardrobe with our latest collection of women's fashion. From everyday essentials to elegant statement pieces, enjoy 30% off for a limited time. Style, comfort, and savings — all in one place.",
      image: womenImage,
      button: "Shop Now",
    },
    {
      title: "50% off on Men's Wear",
      description:
        "Upgrade your style with our exclusive men’s wear sale. Get up to 50% off on premium shirts, jeans, and more. Whether it’s casual or formal, discover fashion that fits your lifestyle — at half the price.",
      image: menImage,
      button: "Shop Now",
    },
    {
      title: "30% off on Kids' Wear",
      description:
        "Make your little ones shine with our adorable and comfy kids' collection. From playful prints to everyday essentials, enjoy 30% off on outfits designed for fun and movement. Perfect for every season and every adventure.",
      image: shopImg,
      button: "Shop Now",
    },
  ];
  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full bg-gray-50 md:h-[540px]">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 md:mt-16 h-auto">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="mb-6">{slide.description}</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600">
                  {slide.button}
                </button>
              </div>
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src={slide.image}
                  alt="hero"
                  className="w-full max-w-sm mx-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="h-auto w-full max-w-6xl mx-auto flex flex-col content-between md:flex-row justify-between mt-20 gap-10">
        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-72 h-72 object-cover rounded-lg shadow-xl"
            src={img}
            alt=""
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-3.5 justify-center md:items-start items-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            Winter Sale Up To 60% Off
          </h1>
          <p className="text-center md:text-start">
            Embrace the chill in style! Shop cozy jackets, trendy sweaters, and
            warm essentials with discounts up to 60%. Limited time only —
            upgrade your winter wardrobe today!
          </p>
          <div className="mt-8 space-y-2.5">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-200 text-purple-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c0 .552-.224 1.052-.586 1.414A2 2 0 1112 11z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 11h14v10H5z"
                  />
                </svg>
              </div>
              <span className="font-semibold">Quality Products</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-200 text-orange-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16V8a1 1 0 011-1h10l4 4v5a1 1 0 01-1 1h-1"
                  />
                  <circle cx="7.5" cy="17.5" r="1.5" />
                  <circle cx="17.5" cy="17.5" r="1.5" />
                </svg>
              </div>
              <span className="font-semibold">Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-200 text-green-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 7h20M2 11h20v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6z"
                  />
                </svg>
              </div>
              <span className="font-semibold">Easy Payment Method</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
