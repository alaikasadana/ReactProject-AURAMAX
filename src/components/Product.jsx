import { useState } from "react";
import { FiShoppingCart, FiUser, FiTruck } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { BsReceipt } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";

import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";

function Product() {
  const [qty, setQty] = useState(1);
  const [current, setCurrent] = useState(0);
  const [cart, setCart] = useState([]);

  const images = [img1, img2, img3, img4];

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const addToCart = () => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === 1);

      if (existing) {
        return prev.map((item) =>
          item.id === 1 ? { ...item, qty: item.qty + qty } : item
        );
      }

      return [
        ...prev,
        {
          id: 1,
          name: "WH-1000XM6 Headphones",
          price: 49990,
          image: images[current],
          qty: qty,
        },
      ];
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔥 NAVBAR */}
      <div className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-semibold">Auramax</h1>

        <div className="flex items-center gap-6 text-xl">
          <div className="relative cursor-pointer">
            <FiShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-1.5 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
          <FiUser />
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
              <div>
                <h2 className="text-2xl font-bold">₹49,990</h2>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <button className="bg-black text-white py-3 rounded-full">Buy Now</button>
                <button className="hover:bg-gray-200  border-3 py-3 rounded-full border-gray-300" onClick={addToCart} >
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 🔥 TOP STRIP */}
      <div className="bg-white py-6 ">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

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
             
    <section className="bg-white py-16 px-4">
      <div className="w-auto mx-auto">
       
        <h2 className="text-center text-4xl md:text-5xl font-medium text-zinc-900 mb-12 tracking-tight">
          Quick Product <span className="font-bold">Highlights</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[700px]">
          
         
          <div className="md:col-span-3 bg-zinc-100 rounded-[2rem] p-8 flex flex-col relative overflow-hidden group border border-zinc-200">
            <div className="relative z-10">
              <h3 className="text-zinc-400 text-xl font-semibold">WH-1000XM6</h3>
              <div className="mt-8">
                <span className="text-8xl font-bold text-zinc-900 leading-none">60</span>
                <p className="text-zinc-500 font-bold leading-tight uppercase text-sm tracking-widest">
                  Hours<br/>Playback
                </p>
              </div>
            </div>
            <img 
              src={img3} 
              alt="60 Hours" 
              className="absolute bottom-[-20px] left-[-20px] w-full h-1/2 object-contain grayscale hover:grayscale-0 transition-all duration-500 scale-125"
            />
          </div>

  
          <div className="md:col-span-4 bg-zinc-900 rounded-[2rem] p-10 flex flex-col justify-between relative overflow-hidden text-white">
            <h3 className="text-5xl font-bold leading-none tracking-tighter">Adaptive<br/>Fit</h3>
            <div className="relative h-2/3 mt-4">
              <img 
                src={img4} 
                alt="Adaptive Fit" 
                className="w-full h-full object-cover rounded-2xl mix-blend-luminosity opacity-80"
              />
            </div>
          </div>


          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            
     
            <div className="bg-zinc-200 rounded-[2rem] p-8 relative overflow-hidden border border-zinc-300">
              <h3 className="text-zinc-600 font-bold text-2xl uppercase tracking-tighter leading-none">
                PRO SIGNATURE<br/><span className="text-zinc-900">SOUND</span>
              </h3>
              <img 
                src="https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=500" 
                alt="Drivers" 
                className="absolute right-[-40px] top-[-20px] w-64 h-full object-contain -rotate-12 grayscale"
              />
            </div>

            <div className="bg-zinc-100 rounded-[2rem] p-8 flex items-center justify-between relative overflow-hidden border border-zinc-200">
              <div className="flex items-end">
                <span className="text-9xl font-black text-zinc-900 tracking-tighter">40</span>
                <div className="mb-4 ml-2">
                  <p className="text-3xl font-bold text-zinc-900">mm</p>
                  <p className="text-zinc-500 font-bold uppercase text-xs">Drivers</p>
                </div>
              </div>
              <div className="w-32 h-32 bg-zinc-900 rounded-full flex items-center justify-center text-white text-xs font-bold text-center p-4 leading-tight rotate-12">
                CRISP AUDIO TECHNOLOGY
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
             


    </div>
  );
}

export default Product;

