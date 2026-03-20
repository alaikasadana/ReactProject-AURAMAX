import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";

function Account() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);

  const getUser = async () => {
    const res = await axios.get("http://localhost:3000/userdata");
    setUser(res.data[0]);
  };

  useEffect(() => {
    getUser();
  }, []);

  const updateUser = async () => {
    await axios.put(
      `http://localhost:3000/userdata/${user.id}`,
      user
    );
    setEdit(false);
  };

  if (!user) return <p className="text-black">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 text-black">

      {/* 🔥 NAVBAR (SAME AS CART) */}
      <div className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">

        <h1
          className="text-xl font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Auramax
        </h1>

        <div className="flex items-center gap-6 text-xl">

          <div
            className="cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <FiShoppingCart />
          </div>

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

        <h1 className="text-4xl font-bold mb-10">My Account</h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border space-y-6">

            <div>
              <label className="text-gray-500 text-sm">Full Name</label>
              <input
                type="text"
                value={user.name}
                disabled={!edit}
                onChange={(e) =>
                  setUser({ ...user, name: e.target.value })
                }
                className="w-full mt-2 p-3 rounded-lg bg-gray-50 border border-gray-300"
              />
            </div>

            <div>
              <label className="text-gray-500 text-sm">Email</label>
              <input
                type="email"
                value={user.email}
                disabled={!edit}
                onChange={(e) =>
                  setUser({ ...user, email: e.target.value })
                }
                className="w-full mt-2 p-3 rounded-lg bg-gray-50 border border-gray-300"
              />
            </div>

            <div>
              <label className="text-gray-500 text-sm">Change Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                onChange={(e) =>
                  setUser({ ...user, password: e.target.value })
                }
                className="w-full mt-2 p-3 rounded-lg bg-gray-50 border border-gray-300"
              />
            </div>

            <div className="flex gap-4 mt-6">
              {!edit ? (
                <button
                  onClick={() => setEdit(true)}
                  className="bg-black text-white px-6 py-2 rounded-full"
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  onClick={updateUser}
                  className="bg-green-500 text-white px-6 py-2 rounded-full"
                >
                  Save Changes
                </button>
              )}
            </div>

          </div>

          {/* RIGHT PROFILE */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border flex flex-col items-center text-center">

            <img
              src={`https://ui-avatars.com/api/?name=${user.name}&background=000&color=fff&size=200`}
              alt=""
              className="w-32 h-32 rounded-full border-4 border-gray-300"
            />

            <h2 className="text-2xl font-semibold mt-4">
              {user.name}
            </h2>

            <p className="text-gray-500 mt-1">
              {user.email}
            </p>

            <span className="mt-3 px-4 py-1 text-sm bg-green-500 text-white rounded-full">
              Premium Member
            </span>

            <div className="flex gap-10 mt-8">

              <div>
                <h3 className="text-xl font-bold">12</h3>
                <p className="text-gray-500 text-sm">Orders</p>
              </div>

              <div>
                <h3 className="text-xl font-bold">5</h3>
                <p className="text-gray-500 text-sm">Wishlist</p>
              </div>

              <div>
                <h3 className="text-xl font-bold">2</h3>
                <p className="text-gray-500 text-sm">Reviews</p>
              </div>

            </div>

            <div className="mt-8 text-gray-500 text-sm">
              Joined in 2024 • Auramax User
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Account;