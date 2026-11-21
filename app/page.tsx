"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const reviews = [
    {
      name: "Sarah M.",
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. Every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Alex K.",
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co.",
    },
    {
      name: "James L.",
      review:
        "I'm thrilled to have stumbled upon Shop.co. The selection of clothes is amazing.",
    },
    {
      name: "Megan R.",
      review:
        "Amazing quality and beautiful designs. I love shopping at Shop.co.",
    },
    {
      name: "Daniel P.",
      review:
        "The clothes are comfortable, stylish and affordable. Definitely my favorite online store.",
    },
    {
      name: "Olivia S.",
      review:
        "Great experience! The delivery was quick and the quality was even better than expected.",
    },
  ];

  const [active, setActive] = useState(0);
  const [moreNew, setMoreNew] = useState(false);
  const [moreTop, setMoreTop] = useState(false);

  const nextReview = () => {
    setActive((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActive((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const firstReview = reviews[active];
  const secondReview = reviews[(active + 1) % reviews.length];
  const thirdReview = reviews[(active + 2) % reviews.length];

  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* Hero Section */}
      <div className="w-full bg-[#F2F0F1] px-4 md:px-12 py-8 md:py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of
              style.
            </p>
            <button className="bg-black text-white rounded-full h-11 px-8 mt-6 text-sm cursor-pointer">
              Shop Now
            </button>

            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <h3 className="font-bold text-2xl sm:text-3xl">200+</h3>
                <p className="text-gray-600 text-xs">International Brands</p>
              </div>
              <div className="border-l border-gray-300 pl-6">
                <h3 className="font-bold text-2xl sm:text-3xl">2,000+</h3>
                <p className="text-gray-600 text-xs">High-Quality Products</p>
              </div>
              <div className="border-l border-gray-300 pl-6">
                <h3 className="font-bold text-2xl sm:text-3xl">30,000+</h3>
                <p className="text-gray-600 text-xs">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <img
              className="w-full max-w-md lg:max-w-lg h-80 sm:h-96 lg:h-120 object-cover object-top rounded-2xl"
              src="img.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Logos Bar */}
      <div className="w-full bg-black text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-10">
          <img className="h-6 md:h-7 w-auto" src="logo.svg" alt="" />
          <img className="h-6 md:h-7 w-auto" src="logo2.svg" alt="" />
          <img className="h-6 md:h-7 w-auto" src="logo3.svg" alt="" />
          <img className="h-6 md:h-7 w-auto" src="logo4.svg" alt="" />
          <img className="h-6 md:h-7 w-auto" src="logo5.svg" alt="" />
        </div>
      </div>

      {/* New Arrivals */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 flex flex-col items-center">
        <h3 className="font-extrabold text-2xl sm:text-4xl text-center mb-8">
          NEW ARRIVALS
        </h3>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div>
            <img className="w-full h-44 sm:h-52 object-cover rounded-2xl" src="img.svg" alt="" />
            <h3 className="font-bold text-sm sm:text-base mt-2">T-SHIRT WITH TAPE DETAILS</h3>
            <div className="flex w-24 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="halfstar.svg" alt="" />
            </div>
            <p className="font-bold">$120</p>
          </div>

          <div>
            <img className="w-full h-44 sm:h-52 object-cover rounded-2xl" src="img2.svg" alt="" />
            <h3 className="font-bold text-sm sm:text-base mt-2">SKINNY FIT JEANS</h3>
            <div className="flex w-20 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="halfstar.svg" alt="" />
            </div>
            <p className="font-bold">$240</p>
          </div>

          <div className={moreNew ? "block" : "hidden lg:block"}>
            <img className="w-full h-44 sm:h-52 object-cover rounded-2xl" src="img3.svg" alt="" />
            <h3 className="font-bold text-sm sm:text-base mt-2">CHECKERED SHIRT</h3>
            <div className="flex w-24 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="halfstar.svg" alt="" />
            </div>
            <p className="font-bold">$180</p>
          </div>

          <div className={moreNew ? "block" : "hidden lg:block"}>
            <img className="w-full h-44 sm:h-52 object-cover rounded-2xl" src="img4.svg" alt="" />
            <h3 className="font-bold text-sm sm:text-base mt-2">SLEEVE STRIPED T-SHIRT</h3>
            <div className="flex w-24 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="halfstar.svg" alt="" />
            </div>
            <p className="font-bold">$130</p>
          </div>

          {/* Extra images on click */}
          <div className={moreNew ? "block" : "hidden"}>
            <img className="w-full h-44 sm:h-52 object-cover rounded-2xl" src="imgg.svg" alt="" />
            <h3 className="font-bold text-sm sm:text-base mt-2">VERTICAL STRIPED SHIRT</h3>
            <div className="flex w-24 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
            </div>
            <p className="font-bold">$212</p>
          </div>

          <div className={moreNew ? "block" : "hidden"}>
            <img className="w-full h-44 sm:h-52 object-cover rounded-2xl" src="imgg2.svg" alt="" />
            <h3 className="font-bold text-sm sm:text-base mt-2">COURAGE GRAPHIC T-SHIRT</h3>
            <div className="flex w-20 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="halfstar.svg" alt="" />
            </div>
            <p className="font-bold">$145</p>
          </div>
        </div>

        <button
          onClick={() => setMoreNew(!moreNew)}
          className="border border-gray-400 w-full max-w-xs sm:w-36 h-11 rounded-full mt-8 text-gray-700 hover:bg-slate-100 cursor-pointer"
        >
          {moreNew ? "Show Less" : "View All"}
        </button>
      </div>

      <div className="bg-gray-300 h-px w-[90%] max-w-7xl mx-auto"></div>

      {/* Top Sellings */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 flex flex-col items-center">
        <h3 className="font-extrabold text-2xl sm:text-4xl text-center mb-8">
          TOP SELLINGS
        </h3>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div>
            <img className="w-full h-44 sm:h-52 object-cover rounded-2xl" src="imgg.svg" alt="" />
            <h3 className="font-bold text-sm sm:text-base mt-2">VERTICAL STRIPED SHIRT</h3>
            <div className="flex w-24 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
            </div>
            <p className="font-bold">$212</p>
          </div>

          <div>
            <img className="w-full h-44 sm:h-52 object-cover rounded-2xl" src="imgg2.svg" alt="" />
            <h3 className="font-bold text-sm sm:text-base mt-2">COURAGE GRAPHIC T-SHIRT</h3>
            <div className="flex w-20 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="halfstar.svg" alt="" />
            </div>
            <p className="font-bold">$145</p>
          </div>

          <div className={moreTop ? "block" : "hidden lg:block"}>
            <img className="w-full h-44 sm:h-52 object-cover rounded-2xl" src="imgg3.svg" alt="" />
            <h3 className="font-bold text-sm sm:text-base mt-2">LOOSE FIT BERMUDA SHORTS</h3>
            <div className="flex w-16 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
            </div>
            <p className="font-bold">$80</p>
          </div>

          <div className={moreTop ? "block" : "hidden lg:block"}>
            <img className="w-full h-44 sm:h-52 object-cover rounded-2xl" src="imgg4.svg" alt="" />
            <h3 className="font-bold text-sm sm:text-base mt-2">FADED SKINNY JEANS</h3>
            <div className="flex w-24 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="halfstar.svg" alt="" />
            </div>
            <p className="font-bold">$210</p>
          </div>

          {/* Extra images on click */}
          <div className={moreTop ? "block" : "hidden"}>
            <img className="w-full h-44 sm:h-52 object-cover rounded-2xl" src="img.svg" alt="" />
            <h3 className="font-bold text-sm sm:text-base mt-2">T-SHIRT WITH TAPE DETAILS</h3>
            <div className="flex w-24 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="halfstar.svg" alt="" />
            </div>
            <p className="font-bold">$120</p>
          </div>

          <div className={moreTop ? "block" : "hidden"}>
            <img className="w-full h-44 sm:h-52 object-cover rounded-2xl" src="img3.svg" alt="" />
            <h3 className="font-bold text-sm sm:text-base mt-2">CHECKERED SHIRT</h3>
            <div className="flex w-24 my-1">
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="star.svg" alt="" />
              <img src="halfstar.svg" alt="" />
            </div>
            <p className="font-bold">$180</p>
          </div>
        </div>

        <button
          onClick={() => setMoreTop(!moreTop)}
          className="border border-gray-400 w-full max-w-xs sm:w-36 h-11 rounded-full mt-8 text-gray-700 hover:bg-slate-100 cursor-pointer"
        >
          {moreTop ? "Show Less" : "View All"}
        </button>
      </div>

      {/* Browse by Dress Style */}
      <div className="px-4 md:px-10">
        <div className="bg-[#F0F0F0] rounded-2xl w-full max-w-6xl mx-auto p-5 md:p-8">
          <h2 className="font-extrabold text-2xl sm:text-3xl text-center mb-8">
            BROWSE BY DRESS STYLE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5 h-48 md:h-56 rounded-xl overflow-hidden bg-white">
              <Link href="/Casual" className="block w-full h-full">
                <img src="/casual.svg" alt="Casual" className="w-full h-full object-cover object-top" />
              </Link>
            </div>

            <div className="md:col-span-7 h-48 md:h-56 rounded-xl overflow-hidden bg-white">
              <Link href="/Formal" className="block w-full h-full">
                <img src="/formal.svg" alt="Formal" className="w-full h-full object-cover object-top" />
              </Link>
            </div>

            <div className="md:col-span-7 h-48 md:h-56 rounded-xl overflow-hidden bg-white">
              <Link href="/Party" className="block w-full h-full">
                <img src="/party.svg" alt="Party" className="w-full h-full object-cover object-top" />
              </Link>
            </div>

            <div className="md:col-span-5 h-48 md:h-56 rounded-xl overflow-hidden bg-white">
              <Link href="/Gym" className="block w-full h-full">
                <img src="/gym.svg" alt="Gym" className="w-full h-full object-cover object-top" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 mt-12 mb-12">
        <div className="flex justify-between items-center mb-7">
          <h2 className="font-bold text-2xl md:text-4xl">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex gap-4">
            <button onClick={prevReview} className="text-3xl hover:scale-125 transition cursor-pointer">
              ←
            </button>
            <button onClick={nextReview} className="text-3xl hover:scale-125 transition cursor-pointer">
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-300 rounded-2xl p-5 min-h-52">
            <div className="flex text-yellow-400 text-xl">★★★★★</div>
            <h3 className="flex items-center gap-2 text-lg font-semibold mt-2 mb-2">
              {firstReview.name}
              <img src="check.svg" alt="Verified" className="w-5 h-5" />
            </h3>
            <p className="text-gray-500 text-sm leading-6">
              "{firstReview.review}"
            </p>
          </div>

          <div className="hidden md:block border border-gray-300 rounded-2xl p-5 min-h-52">
            <div className="flex text-yellow-400 text-xl">★★★★★</div>
            <h3 className="flex items-center gap-2 text-lg font-semibold mt-2 mb-2">
              {secondReview.name}
              <img src="check.svg" alt="Verified" className="w-5 h-5" />
            </h3>
            <p className="text-gray-500 text-sm leading-6">
              "{secondReview.review}"
            </p>
          </div>

          <div className="hidden lg:block border border-gray-300 rounded-2xl p-5 min-h-52">
            <div className="flex text-yellow-400 text-xl">★★★★★</div>
            <h3 className="flex items-center gap-2 text-lg font-semibold mt-2 mb-2">
              {thirdReview.name}
              <img src="check.svg" alt="Verified" className="w-5 h-5" />
            </h3>
            <p className="text-gray-500 text-sm leading-6">
              "{thirdReview.review}"
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}