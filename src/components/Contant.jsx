import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ FIXED
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      // optional: if backend sends JSON response
      const data = await res.json();
      console.log("Response:", data);

      alert("Message sent successfully!");

      // reset form
      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-16">

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-2xl text-green-400 font-medium">
          Contact <span className="text-blue-500">Us</span>
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Need Help? We’re Here for You
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Questions about your order, product support, or partnership opportunities?
          Our team is ready to assist you.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>

          <div className="border rounded-xl p-6 mb-6 bg-white shadow-sm hover:shadow-md transition">
            <p className="font-medium">Email</p>
            <p className="text-gray-600 mt-1">support@auramax.com</p>
          </div>

          <div className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition">
            <p className="font-medium">Live Chat</p>
            <p className="text-gray-600 mt-1">Mon–Fri, 9am–6pm (PST)</p>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Write Us</h2>

          <form
            onSubmit={handleSubmit}
            className="border rounded-xl p-6 bg-white shadow-sm"
          >
            
            {/* Inputs */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-black/70"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-black/70"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="text-sm text-gray-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write here"
                className="w-full mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-black/70"
                required
              ></textarea>
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-3 rounded-full transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>

          </form>
        </div>

      </div>

    <section>
          <div className="py-20 text-center">

      <p className=" font-semibold text-2xl  bg-gradient-to-r
                   from-green-300 via-blue-500 to-blue-700 
                   bg-clip-text text-transparent">FAQ</p>

      <h2 className="text-5xl font-bold mt-2">
        Got Questions? We’ve Got <br /> Answers.
      </h2>

      <div className="max-w-3xl mx-auto mt-12 space-y-4">

        <details className="bg-gray-100 rounded-lg p-4 text-left">
          <summary className="cursor-pointer font-medium">
            What’s the battery life like with ANC on?
          </summary>
          <p className="mt-3 text-gray-600">
            Battery lasts around 20–30 hours with ANC enabled.
          </p>
        </details>

        <details className="bg-gray-100 rounded-lg p-4 text-left">
          <summary className="cursor-pointer font-medium">
            Can I use it wired and wireless?
          </summary>
          <p className="mt-3 text-gray-600">
            Yes, you can use it both with Bluetooth or a cable.
          </p>
        </details>

        <details className="bg-gray-100 rounded-lg p-4 text-left">
          <summary className="cursor-pointer font-medium">
            Is it compatible with iOS and Android?
          </summary>
          <p className="mt-3 text-gray-600">
            Yes, it works with both iOS and Android devices.
          </p>
        </details>

        <details className="bg-gray-100 rounded-lg p-4 text-left">
          <summary className="cursor-pointer font-medium">
            Does it support multipoint Bluetooth connections?
          </summary>
          <p className="mt-3 text-gray-600">
            Yes, it allows connection to multiple devices.
          </p>
        </details>

        <details className="bg-gray-100 rounded-lg p-4 text-left">
          <summary className="cursor-pointer font-medium">
            How long does it take to fully charge the headphones?
          </summary>
          <p className="mt-3 text-gray-600">
            It takes about 2 hours to fully charge.
          </p>
        </details>

        <details className="bg-gray-100 rounded-lg p-4 text-left">
          <summary className="cursor-pointer font-medium">
            What’s included in the box?
          </summary>
          <p className="mt-3 text-gray-600">
            Headphones, charging cable, audio cable, and manual.
          </p>
        </details>

      </div>
    </div>
    </section>


    </div>
  );
}

export default Contact;