"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Detail = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("reviews");
  const [showMore, setShowMore] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);

  // Bari wali main image ke liye state, shuru mein default shirt4.svg hogi
  const [mainImage, setMainImage] = useState("/shirt4.svg");

  // Choti images ki list jinhin click karke main image change hogi
  const thumbnailImages = ["/shirt2.svg", "/shirt3.svg", "/shirt4.svg"];

  // Color options (Sirf selection ke liye, image change nahi hogi)
  const colorVariants = [
    { id: 0, colorCode: "#4F4631" },
    { id: 1, colorCode: "#314F4F" },
    { id: 2, colorCode: "#242C3F" },
  ];

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    router.push("/cart");
  };

  const reviewsData = [
    {
      name: "Samantha D.",
      date: "August 14, 2023",
      rating: 5,
      review:
        '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
    },
    {
      name: "Alex M.",
      date: "August 15, 2023",
      rating: 5,
      review:
        '"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."',
    },
    {
      name: "Ethan R.",
      date: "August 16, 2023",
      rating: 4,
      review:
        '"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer\'s touch in every aspect of this shirt."',
    },
    {
      name: "Olivia P.",
      date: "August 17, 2023",
      rating: 5,
      review:
        '"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It\'s evident that the designer poured their creativity into making this t-shirt stand out."',
    },
    {
      name: "Liam K.",
      date: "August 18, 2023",
      rating: 5,
      review:
        '"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer\'s skill. It\'s like wearing a piece of art that reflects my passion for both design and fashion."',
    },
    {
      name: "Ava H.",
      date: "August 19, 2023",
      rating: 5,
      review:
        '"I\'m not just wearing a t-shirt; I\'m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."',
    },
  ];

  return (
    <div className="w-full overflow-x-hidden pb-16">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto py-4 px-4">
        <ul className="flex text-gray-600 gap-2 text-xs sm:text-sm">
          <li>Home {">"}</li>
          <li>Shop {">"}</li>
          <li>Men {">"}</li>
          <li className="text-black">t-shirts</li>
        </ul>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Images */}
        <div className="flex flex-col-reverse sm:flex-row gap-4">
          {/* Choti Images Jin par click karne se main image change hogi */}
          <div className="flex sm:flex-col gap-3 justify-center">
            {thumbnailImages.map((imgSrc, idx) => (
              <img
                key={idx}
                onClick={() => setMainImage(imgSrc)}
                className={`w-20 h-20 sm:w-24 sm:h-28 md:w-28 md:h-32 object-cover rounded-xl cursor-pointer border-2 transition hover:opacity-80 ${
                  mainImage === imgSrc ? "border-black" : "border-gray-300"
                }`}
                src={imgSrc}
                alt="Thumbnail"
              />
            ))}
          </div>

          {/* Bari Wali Main Image */}
          <div className="w-full">
            <img
              className="w-full h-80 sm:h-105 md:h-125 object-cover rounded-3xl transition-all duration-300"
              src={mainImage}
              alt="Main Product Preview"
            />
          </div>
        </div>

        {/* Right Product Details */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            ONE LIFE GRAPHIC T-SHIRT
          </h1>
          <div className="flex items-center gap-2 mt-2 text-yellow-400 text-lg">
            <span>★★★★☆</span>
            <span className="text-gray-500 text-sm">4.5/5</span>
          </div>
          <div className="flex gap-3 mt-3 items-center">
            <span className="text-2xl sm:text-3xl font-bold">$260</span>
            <span className="text-2xl sm:text-3xl font-bold text-gray-400 line-through">
              $300
            </span>
          </div>
          <p className="text-gray-500 mt-3 text-sm leading-relaxed">
            This graphic t-shirt which is perfect for any occasion. Crafted from a
            soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr className="my-4 border-gray-200" />

          {/* Color Selection (Sirf selection karega, image ko kuch nahi karega) */}
          <p className="text-gray-500 text-sm">Select Colors</p>
          <div className="flex gap-3 mt-2">
            {colorVariants.map((variant, index) => (
              <div
                key={variant.id}
                onClick={() => setSelectedColor(index)}
                style={{ backgroundColor: variant.colorCode }}
                className={`w-9 h-9 rounded-full cursor-pointer flex items-center justify-center transition-transform hover:scale-110 shadow-sm ${
                  selectedColor === index
                    ? "ring-4 ring-black ring-offset-2"
                    : "border border-gray-300"
                }`}
              >
                {selectedColor === index && (
                  <span className="text-white text-xs font-bold">✓</span>
                )}
              </div>
            ))}
          </div>
          <hr className="my-4 border-gray-200" />

          <p className="text-gray-500 text-sm">Choose Size</p>
          <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-2">
            <button className="h-10 px-4 sm:px-5 bg-gray-100 hover:bg-black hover:text-white text-gray-600 rounded-full text-sm transition cursor-pointer">
              Small
            </button>
            <button className="h-10 px-4 sm:px-5 bg-gray-100 hover:bg-black hover:text-white text-gray-600 rounded-full text-sm transition cursor-pointer">
              Medium
            </button>
            <button className="h-10 px-4 sm:px-5 bg-gray-100 hover:bg-black hover:text-white text-gray-600 rounded-full text-sm transition cursor-pointer">
              Large
            </button>
            <button className="h-10 px-4 sm:px-5 bg-gray-100 hover:bg-black hover:text-white text-gray-600 rounded-full text-sm transition cursor-pointer">
              X-Large
            </button>
          </div>
          <hr className="my-4 border-gray-200" />

          {/* Quantity Counter & Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
            <div className="flex items-center justify-between w-full sm:w-32 h-12 bg-gray-100 px-4 rounded-full">
              <button
                onClick={decreaseQty}
                className="cursor-pointer text-lg font-bold hover:text-red-500"
              >
                -
              </button>
              <span className="font-bold">{quantity}</span>
              <button
                onClick={increaseQty}
                className="cursor-pointer text-lg font-bold hover:text-green-500"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full sm:flex-1 h-12 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews & Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 mt-16 font-sans">
        <div className="flex border-b border-gray-200 text-gray-500 text-xs sm:text-sm md:text-base font-medium justify-between mb-8">
          <button
            onClick={() => setActiveTab("details")}
            className={`pb-4 w-1/3 text-center transition-colors cursor-pointer ${
              activeTab === "details"
                ? "text-black border-b-2 border-black font-semibold"
                : "hover:text-black"
            }`}
          >
            Product Details
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-4 w-1/3 text-center transition-colors cursor-pointer ${
              activeTab === "reviews"
                ? "text-black border-b-2 border-black font-semibold"
                : "hover:text-black"
            }`}
          >
            Rating & Reviews
          </button>
          <button
            onClick={() => setActiveTab("faqs")}
            className={`pb-4 w-1/3 text-center transition-colors cursor-pointer ${
              activeTab === "faqs"
                ? "text-black border-b-2 border-black font-semibold"
                : "hover:text-black"
            }`}
          >
            FAQs
          </button>
        </div>

        {/* Reviews Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              All Reviews
            </h2>
            <span className="text-gray-500 text-sm md:text-base">(451)</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <button className="bg-[#F0F0F0] p-2.5 rounded-full hover:bg-gray-200 transition cursor-pointer flex items-center justify-center">
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707v4.172a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-8.586a1 1 0 00-.293-.707L.293 7.293A1 1 0 010 6.586V4z"
                />
              </svg>
            </button>

            <div className="bg-[#F0F0F0] px-4 py-2.5 rounded-full flex items-center gap-2 text-xs sm:text-sm font-medium cursor-pointer">
              <span>Latest</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <button className="bg-black text-white px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 transition cursor-pointer">
              Write a Review
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviewsData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between bg-white shadow-sm"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex text-yellow-400 text-lg">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <button className="text-gray-400 hover:text-black font-bold tracking-widest cursor-pointer">
                    ...
                  </button>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-base text-black">
                    {item.name}
                  </h3>
                  <span className="bg-[#01AB31] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                    ✓
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.review}
                </p>
              </div>

              <p className="text-gray-400 text-xs font-medium">
                Posted on {item.date}
              </p>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-10">
          <button className="border border-gray-300 px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition cursor-pointer">
            Load More Reviews
          </button>
        </div>
      </div>

      {/* You Might Also Like Section */}
      <div className="max-w-7xl mx-auto px-4 bg-white mt-16 flex flex-col items-center">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-8">
          YOU MIGHT ALSO LIKE
        </h1>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div>
            <img
              className="w-full h-44 sm:h-52 object-cover rounded-2xl"
              src="img.svg"
              alt=""
            />
            <h1 className="font-bold text-sm sm:text-base mt-2">
              T-SHIRT WITH TAPE DETAILS
            </h1>
            <div className="imgs flex w-24 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="halfstar.svg" alt="" />
            </div>
            <p className="font-bold">$120</p>
          </div>

          <div>
            <img
              className="w-full h-44 sm:h-52 object-cover rounded-2xl"
              src="img2.svg"
              alt=""
            />
            <h1 className="font-bold text-sm sm:text-base mt-2">
              SKINNY FIT JEANS
            </h1>
            <div className="imgs flex w-20 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="halfstar.svg" alt="" />
            </div>
            <p className="font-bold">$240</p>
          </div>

          <div className={showMore ? "block" : "hidden lg:block"}>
            <img
              className="w-full h-44 sm:h-52 object-cover rounded-2xl"
              src="img3.svg"
              alt=""
            />
            <h1 className="font-bold text-sm sm:text-base mt-2">
              CHECKERED SHIRT
            </h1>
            <div className="imgs flex w-24 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="halfstar.svg" alt="" />
            </div>
            <p className="font-bold">$180</p>
          </div>

          <div className={showMore ? "block" : "hidden lg:block"}>
            <img
              className="w-full h-44 sm:h-52 object-cover rounded-2xl"
              src="img4.svg"
              alt=""
            />
            <h1 className="font-bold text-sm sm:text-base mt-2">
              SLEEVE STRIPED T-SHIRT
            </h1>
            <div className="imgs flex w-24 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="halfstar.svg" alt="" />
            </div>
            <p className="font-bold">$130</p>
          </div>

          {/* Extra cards on View All click */}
          <div className={showMore ? "block" : "hidden"}>
            <img
              className="w-full h-44 sm:h-52 object-cover rounded-2xl"
              src="imgg.svg"
              alt=""
            />
            <h1 className="font-bold text-sm sm:text-base mt-2">
              VERTICAL STRIPED SHIRT
            </h1>
            <div className="imgs flex w-24 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
            </div>
            <p className="font-bold">$212</p>
          </div>

          <div className={showMore ? "block" : "hidden"}>
            <img
              className="w-full h-44 sm:h-52 object-cover rounded-2xl"
              src="imgg2.svg"
              alt=""
            />
            <h1 className="font-bold text-sm sm:text-base mt-2">
              COURAGE GRAPHIC T-SHIRT
            </h1>
            <div className="imgs flex w-20 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="halfstar.svg" alt="" />
            </div>
            <p className="font-bold">$145</p>
          </div>
        </div>

        <div className="flex justify-center mt-8 w-full">
          <button
            onClick={() => setShowMore(!showMore)}
            className="border border-gray-400 w-full max-w-xs sm:w-36 h-11 rounded-full justify-center items-center text-gray-600 hover:bg-slate-100 transition cursor-pointer"
          >
            {showMore ? "Show Less" : "View All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;