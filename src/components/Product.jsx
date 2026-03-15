import { useState, useEffect } from "react";
import { FiShoppingCart, FiUser, FiTruck } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { BsReceipt } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";

function Product() {

  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [current, setCurrent] = useState(0);
  const [cart, setCart] = useState([]);

  const images = [img1, img2, img3, img4];

  // 🔥 FETCH CART (for badge count)
  useEffect(() => {
    const fetchCart = async () => {
      const res = await axios.get("http://localhost:3000/cart");
      setCart(res.data);
    };
    fetchCart();
  }, []);

  // SLIDER
  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  // 🔥 ADD TO CART (SMART VERSION)
  const addToCart = async () => {
    const res = await axios.get("http://localhost:3000/cart");

    const existing = res.data.find(
      (item) => item.name === "WH-1000XM6 Headphones"
    );

    if (existing) {
      // UPDATE QTY
      await axios.patch(`http://localhost:3000/cart/${existing.id}`, {
        qty: existing.qty + qty,
      });
    } else {
      // ADD NEW
      await axios.post("http://localhost:3000/cart", {
        name: "WH-1000XM6 Headphones",
        price: 49990,
        image: images[current],
        qty: qty,
      });
    }

    // REFRESH CART COUNT
    const updated = await axios.get("http://localhost:3000/cart");
    setCart(updated.data);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔥 NAVBAR */}
      <div className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">

        <h1
          className="text-xl font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Auramax
        </h1>

        <div className="flex items-center gap-6 text-xl">

          {/* CART */}
          <div
            className="relative cursor-pointer hover:scale-110 transition"
            onClick={() => navigate("/cart")}
          >
            <FiShoppingCart />

            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-1.5 rounded-full">
              {cart.length}
            </span>
          </div>

          {/* ACCOUNT */}
          <div
            className="cursor-pointer hover:scale-110 transition"
            onClick={() => navigate("/account")}
          >
            <FiUser />
          </div>

        </div>
      </div>

      {/* 🔥 MAIN PRODUCT */}
      <div className="py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="bg-gray-200 rounded-2xl h-[480px] p-10 relative flex justify-center items-center">
            <img src={images[current]} className="w-[380px]" />

            <button onClick={prevSlide} className="absolute left-4 bg-gray-500 text-white w-10 h-10 rounded-full">❮</button>
            <button onClick={nextSlide} className="absolute right-4 bg-gray-500 text-white w-10 h-10 rounded-full">❯</button>

            <div className="absolute bottom-4 flex gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full ${current === i ? "bg-black" : "bg-gray-400"}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            <h1 className="text-3xl font-semibold">
              WH-1000XM6 Wireless Headphones
            </h1>

            <div className="bg-gray-100 p-6 rounded-2xl space-y-5">

              {/* Quantity */}
              <div className="flex items-center border-2 rounded-xl border-gray-200 overflow-hidden w-fit">
                <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)} className="px-4 py-2">-</button>
                <span className="px-5">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-2">+</button>
              </div>

              {/* Price */}
              <h2 className="text-2xl font-bold">₹49,990</h2>

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <button className="bg-black text-white py-3 rounded-full">
                  Buy Now
                </button>

                <button
                  className="hover:bg-gray-200 border-2 py-3 rounded-full border-gray-300"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 🔥 TOP STRIP */}
      <div className="bg-white py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-10">

          <div className="flex flex-col items-center gap-2">
            <MdVerified size={22} />
            <p>12+3 Months Warranty</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FiRefreshCw size={22} />
            <p>7-day Replacement</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FiTruck size={22} />
            <p>Free Delivery</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <BsReceipt size={22} />
            <p>GST Billing</p>
          </div>

        </div>
      </div>

      {/* 🔥 HIGHLIGHTS */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-center text-4xl font-bold mb-10">
          Quick Product Highlights
        </h2>
      </section>

    </div>
  );
}

export default Product;