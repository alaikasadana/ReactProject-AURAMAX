import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
  });

  const BASE_URL = "http://localhost:3000";

  // ✅ FETCH CART DATA
  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/cart`);
        console.log("CART:", res.data); // debug
        setCart(res.data || []);
      } catch (error) {
        console.error("Cart Fetch Error:", error);
      }
    };

    getCart();
  }, []);

  // ✅ TOTAL CALCULATION
  const total = cart.reduce(
    (acc, item) => acc + (Number(item.price) || 0) * (Number(item.qty) || 0),
    0
  );

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ SUBMIT ORDER
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Cart is empty ❌");
      return;
    }

    const orderId = "ORD" + Date.now();

    const orderData = {
      id: orderId,
      ...form,
      items: cart,
      total,
      date: new Date().toLocaleString(),
    };

    try {
      // save order
      await axios.post(`${BASE_URL}/orders`, orderData);

      // clear cart
      await Promise.all(
        cart.map(item =>
          axios.delete(`${BASE_URL}/cart/${item.id}`)
        )
      );

      navigate("/invoice", { state: orderData });

    } catch (error) {
      console.error("Order Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">

        {/* LEFT - FORM */}
        <div className="p-8">

          <h2 className="text-2xl font-bold mb-6">Checkout</h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Phone</label>
              <input
                type="text"
                name="phone"
                required
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Address</label>
              <textarea
                name="address"
                required
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
                placeholder="Enter address"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Payment</label>
              <select
                name="payment"
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-black"
              >
                <option>Cash on Delivery</option>
                <option>UPI</option>
                <option>Net Banking</option>
              </select>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800">
              Place Order
            </button>

          </form>
        </div>

        {/* RIGHT - PRODUCTS */}
        <div className="bg-gray-50 p-8 border-l">

          <h2 className="text-xl font-semibold mb-6">Your Items</h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">No items in cart</p>
          ) : (
            <div className="space-y-4 max-h-80 overflow-y-auto pr-2">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border"
                >
                  {/* IMAGE */}
                  <img
                    src={
                      item.image?.startsWith("/images")
                        ? item.image
                        : "https://via.placeholder.com/80"
                    }
                    alt=""
                    className="w-20 h-20 object-cover rounded"
                  />

                  {/* DETAILS */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">
                      {item.name || "Product"}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Qty: {item.qty || 0}
                    </p>

                    <p className="text-gray-500 text-sm">
                      ₹{item.price || 0}
                    </p>
                  </div>

                  {/* PRICE */}
                  <div className="font-bold">
                    ₹{(item.price || 0) * (item.qty || 0)}
                  </div>
                </div>
              ))}

            </div>
          )}

          {/* TOTAL */}
          <div className="border-t mt-6 pt-4 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Checkout;