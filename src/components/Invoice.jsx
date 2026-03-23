import { useLocation } from "react-router-dom";

function Invoice() {

  const { state } = useLocation();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">No Order Found</p>
      </div>
    );
  }

  const tax = Math.round(state.total * 0.18); // 18% GST
  const grandTotal = state.total + tax;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">

      <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg p-8">

        {/* 🔥 HEADER */}
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-3xl font-bold">Auramax</h1>
          <div className="text-right">
            <h2 className="text-xl font-semibold">INVOICE</h2>
            <p className="text-sm text-gray-500">{state.date}</p>
          </div>
        </div>

        {/* 🔥 ORDER + CUSTOMER INFO */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div>
            <h3 className="font-semibold mb-2">Bill To:</h3>
            <p>{state.name}</p>
            <p>{state.phone}</p>
            <p className="text-gray-600">{state.address}</p>
          </div>

          <div className="text-right">
            <p><b>Order ID:</b> {state.id}</p>
            <p><b>Payment:</b> {state.payment}</p>
          </div>

        </div>

        {/* 🔥 TABLE */}
        <div className="mt-8 overflow-x-auto">

          <table className="w-full text-left border-collapse">

            <thead>
              <tr className="bg-gray-100 text-sm uppercase text-gray-600">
                <th className="p-3">Product</th>
                <th className="p-3 text-center">Qty</th>
                <th className="p-3 text-right">Price</th>
                <th className="p-3 text-right">Total</th>
              </tr>
            </thead>

            <tbody>
              {state.items.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-3 flex items-center gap-3">
                    <img
                      src={item.image || "https://via.placeholder.com/50"}
                      className="w-12 h-12 object-cover rounded"
                      alt=""
                    />
                    <span>{item.name}</span>
                  </td>

                  <td className="p-3 text-center">
                    {item.qty}
                  </td>

                  <td className="p-3 text-right">
                    ₹{item.price}
                  </td>

                  <td className="p-3 text-right font-medium">
                    ₹{item.price * item.qty}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* 🔥 TOTAL SECTION */}
        <div className="mt-6 flex justify-end">

          <div className="w-full max-w-sm space-y-2">

            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{state.total}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>GST (18%)</span>
              <span>₹{tax}</span>
            </div>

            <div className="flex justify-between text-lg font-bold border-t pt-2">
              <span>Grand Total</span>
              <span>₹{grandTotal}</span>
            </div>

          </div>

        </div>

        {/* 🔥 FOOTER */}
        <div className="mt-10 text-center text-gray-500 text-sm border-t pt-4">
          Thank you for shopping with Auramax ❤️
        </div>

      </div>

    </div>
  );
}

export default Invoice;