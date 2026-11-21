"use client";
import React, { useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      qty: 1,
      img: "/img2.svg",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      qty: 1,
      img: "/img3.svg",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      qty: 1,
      img: "/imgg4.svg",
    },
  ]);

  // Jin items ki ID is array mein hogi, sirf unhi ka bill banega
  const [selectedIds, setSelectedIds] = useState([1, 2, 3]);

  const [promoCode, setPromoCode] = useState("");
  const [discountRate, setDiscountRate] = useState(0.2); // 20% default discount

  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((itemId) => itemId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const increaseQty = (e, id) => {
    e.stopPropagation(); // Quantity dabane par item select/unselect na ho
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (e, id) => {
    e.stopPropagation();
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const removeItem = (e, id) => {
    e.stopPropagation();
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setSelectedIds((prev) => prev.filter((itemId) => itemId !== id));
  };

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === "SHOP30") {
      setDiscountRate(0.3);
    } else if (code === "SHOP20") {
      setDiscountRate(0.2);
    } else if (code.length > 0) {
      setDiscountRate(0.1);
    }
  };

  // Sirf selected items ka bill
  const selectedItems = cartItems.filter((item) => selectedIds.includes(item.id));
  const subtotal = selectedItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const discount = Math.round(subtotal * discountRate);
  const deliveryFee = selectedItems.length > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-16 bg-white">
      {/* Breadcrumb */}
      <div className="text-xs sm:text-sm text-gray-500 mb-4 flex items-center gap-2">
        <span>Home</span>
        <span>{">"}</span>
        <span className="text-black font-medium">Cart</span>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-6 sm:mb-8">
        YOUR CART
      </h1>

      {/* Main Layout: Phone/iPad stacked | Laptop side-by-side */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
        {/* Left: Cart Items Box */}
        <div className="lg:col-span-7 border border-gray-200 rounded-3xl p-4 sm:p-6 bg-white">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 py-10 text-sm sm:text-base">
Empty ....!
            </p>
          ) : (
            cartItems.map((item, idx) => {
              const isSelected = selectedIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => toggleSelect(item.id)}
                  className={`flex gap-3 sm:gap-4 items-center justify-between py-4 px-2 sm:px-3 rounded-2xl cursor-pointer transition ${
                    isSelected
                      ? "bg-gray-50 ring-1 ring-black"
                      : "opacity-65 hover:opacity-100"
                  } ${
                    idx !== cartItems.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  {/* Selection Checkbox Indicator */}
                  <span
                    className={`w-5 h-5 rounded-md border flex items-center justify-center text-xs shrink-0 ${
                      isSelected
                        ? "bg-black text-white border-black"
                        : "border-gray-400 bg-white"
                    }`}
                  >
                    {isSelected && "✓"}
                  </span>

                  {/* Product Image */}
                  <div className="w-20 h-20 sm:w-28 sm:h-28 bg-[#F0EEED] rounded-2xl overflow-hidden shrink-0">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info & Price */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h2 className="font-bold text-sm sm:text-lg text-black truncate">
                        {item.name}
                      </h2>
                      <button
                        type="button"
                        onClick={(e) => removeItem(e, item.id)}
                        className="text-red-500 hover:text-red-700 text-base sm:text-lg cursor-pointer shrink-0"
                        aria-label="Remove item"
                      >
                        🗑
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                      Size: <span className="text-gray-400">{item.size}</span>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Color: <span className="text-gray-400">{item.color}</span>
                    </p>

                    <div className="flex justify-between items-center mt-2.5 gap-2">
                      <p className="font-bold text-base sm:text-xl text-black">
                        ${item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between bg-[#F0F0F0] rounded-full px-3 sm:px-4 py-1.5 w-24 sm:w-28">
                        <button
                          type="button"
                          onClick={(e) => decreaseQty(e, item.id)}
                          className="text-base sm:text-lg font-bold text-black cursor-pointer px-1"
                        >
                          −
                        </button>
                        <span className="text-xs sm:text-sm font-semibold text-black">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => increaseQty(e, item.id)}
                          className="text-base sm:text-lg font-bold text-black cursor-pointer px-1"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right: Order Summary Bill Box */}
        <div className="lg:col-span-5 border border-gray-200 rounded-3xl p-5 sm:p-6 bg-white">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl sm:text-2xl font-bold text-black">
              Order Summary
            </h2>
            <span className="text-xs sm:text-sm text-gray-500">
              Selected: {selectedItems.length}
            </span>
          </div>

          <div className="space-y-3.5 text-sm sm:text-base border-b border-gray-200 pb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-bold text-black">${subtotal}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-500">
                Discount (-{Math.round(discountRate * 100)}%)
              </span>
              <span className="font-bold text-red-500">-${discount}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-500">Delivery Fee</span>
              <span className="font-bold text-black">${deliveryFee}</span>
            </div>
          </div>

          <div className="flex justify-between items-center py-4 text-base sm:text-lg">
            <span className="text-black font-medium">Total</span>
            <span className="font-bold text-xl sm:text-2xl text-black">
              ${total}
            </span>
          </div>

          {/* Promo Code Form */}
          <form
            onSubmit={handleApplyPromo}
            className="flex gap-2.5 sm:gap-3 mt-1 mb-4"
          >
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Add promo code"
              className="flex-1 min-w-0 bg-[#F0F0F0] text-sm text-black placeholder-gray-400 px-4 py-3 rounded-full outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white text-sm font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-gray-800 transition cursor-pointer shrink-0"
            >
              Apply
            </button>
          </form>

          {/* Checkout Button */}
          <button
            type="button"
            className="w-full bg-black text-white text-sm sm:text-base font-medium py-3.5 rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Go to Checkout</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}