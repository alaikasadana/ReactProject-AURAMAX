import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";

function Cart() {

  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  // 🔥 FETCH CART
  const getCart = async () => {
    const res = await axios.get("http://localhost:3000/cart");
    setCart(res.data);
  };

  useEffect(() => {
    getCart();
  }, []);

  // 🔥 UPDATE QTY
  const updateQty = async (item, change) => {
    const newQty = (Number(item.qty) || 0) + change;

    if (newQty < 1) return;

    await axios.patch(`http://localhost:3000/cart/${item.id}`, {
      qty: newQty,
    });

    getCart();
  };

  // 🔥 DELETE
  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3000/cart/${id}`);
    getCart();
  };

  // 🔥 TOTAL
  const total = cart.reduce(
    (acc, item) =>
      acc + (Number(item.price) || 0) * (Number(item.qty) || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 text-black">

      {/* 🔥 NAVBAR */}
      <div className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">

        {/* LOGO */}
        <h1
          className="text-xl font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Auramax
        </h1>

        {/* ICONS */}
        <div className="flex items-center gap-6 text-xl">

          {/* CART */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <FiShoppingCart />
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-1.5 rounded-full">
              {cart.length}
            </span>
          </div>

          {/* ACCOUNT */}
          <div
            className="cursor-pointer"
            onClick={() => navigate("/account")}
          >
            <FiUser />
          </div>

        </div>
      </div>

      {/* 🔥 BODY */}
      <div className="px-6 py-10">

        <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <div className="space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-sm border"
              >
                {/* LEFT */}
                <div className="flex items-center gap-6">
                  <img src={item.image} className="w-28" alt="" />

                  <div>
                    <h2 className="text-xl font-semibold">
                      {item.name || "Product"}
                    </h2>

                    <p className="text-gray-500">
                      ₹{Number(item.price) || 0}
                    </p>

                    {/* QTY */}
                    <div className="flex items-center mt-3 border border-gray-300 rounded-lg overflow-hidden w-fit">
                      <button
                        onClick={() => updateQty(item, -1)}
                        className="px-3 py-1"
                      >
                        -
                      </button>

                      <span className="px-4">
                        {Number(item.qty) || 0}
                      </span>

                      <button
                        onClick={() => updateQty(item, 1)}
                        className="px-3 py-1"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="text-right">
                  <p className="text-xl font-bold">
                    ₹{(Number(item.price) || 0) * (Number(item.qty) || 0)}
                  </p>

                  <button
                    onClick={() => deleteItem(item.id)}
                    className="text-red-500 text-sm mt-2 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* TOTAL */}
            <div className="flex justify-between items-center mt-10 border-t pt-6">
              <h2 className="text-2xl font-semibold">Total</h2>
              <h2 className="text-3xl font-bold">₹{total}</h2>
            </div>

            {/* BUY NOW */}
            <button className="w-full mt-6 bg-black text-white py-3 rounded-full font-semibold hover:opacity-90">
              Buy Now
            </button>

          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;