import { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const [cart, setCart] = useState([]);

  // FETCH CART
  const getCart = async () => {
    const res = await axios.get("http://localhost:3000/cart");
    setCart(res.data);
  };

  useEffect(() => {
    getCart();
  }, []);

  // UPDATE QUANTITY
  const updateQty = async (item, change) => {
    const newQty = item.qty + change;

    if (newQty < 1) return;

    await axios.patch(`http://localhost:3000/cart/${item.id}`, {
      qty: newQty,
    });

    getCart();
  };

  // DELETE ITEM
  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3000/cart/${id}`);
    getCart();
  };

  // TOTAL
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty</p>
      ) : (
        <div className="space-y-6">

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-zinc-900 p-6 rounded-2xl"
            >
              {/* LEFT */}
              <div className="flex items-center gap-6">
                <img src={item.image} className="w-28" />

                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400">₹{item.price}</p>

                  {/* QTY CONTROL */}
                  <div className="flex items-center mt-3 border border-gray-600 rounded-lg overflow-hidden w-fit">
                    <button
                      onClick={() => updateQty(item, -1)}
                      className="px-3 py-1"
                    >
                      -
                    </button>
                    <span className="px-4">{item.qty}</span>
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
                  ₹{item.price * item.qty}
                </p>

                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-red-400 text-sm mt-2 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* TOTAL */}
          <div className="flex justify-between items-center mt-10 border-t border-gray-700 pt-6">
            <h2 className="text-2xl font-semibold">Total</h2>
            <h2 className="text-3xl font-bold">₹{total}</h2>
          </div>

          {/* BUY NOW */}
          <button className="w-full mt-6 bg-white text-black py-3 rounded-full font-semibold">
            Buy Now
          </button>

        </div>
      )}
    </div>
  );
}

export default Cart;