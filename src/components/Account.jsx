import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart, FiUser, FiArrowLeft } from "react-icons/fi";

function Account() {

  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "http://localhost:3000"; // ✅ FIXED PORT

  // ✅ GET USER
  const getUser = async () => {
    try {
      let userId = localStorage.getItem("userId");

      // 🔥 fallback if no login
      if (!userId) {
        const res = await axios.get(`${BASE_URL}/userdata`);
        setUser(res.data[0]);
        return;
      }

      const res = await axios.get(`${BASE_URL}/userdata/${userId}`);
      setUser(res.data);

    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  // ✅ UPDATE USER
  const updateUser = async () => {
    try {
      await axios.put(
        `${BASE_URL}/userdata/${user.id}`,
        user
      );
      setEdit(false);
      alert("Profile updated ✅");
    } catch (error) {
      console.error("Update Error:", error);
    }
  };

  // ✅ LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };

  if (loading) {
    return <p className="text-black text-center mt-10">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-black">

      {/* NAVBAR */}
      <div className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">

        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/product")}
            className="flex items-center gap-2 hover:underline"
          >
            <FiArrowLeft /> Back
          </button>

          <h1
            className="text-xl font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Auramax
          </h1>

          <button
            className="hover:underline"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>

        <div className="flex items-center gap-6 text-xl">
          <div onClick={() => navigate("/cart")} className="cursor-pointer">
            <FiShoppingCart />
          </div>

          <div onClick={() => navigate("/account")} className="cursor-pointer">
            <FiUser />
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="px-6 py-10">

        <h1 className="text-4xl font-bold mb-10">My Account</h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border space-y-6">

            <div>
              <label className="text-gray-500 text-sm">Full Name</label>
              <input
                type="text"
                value={user.name || ""}
                disabled={!edit}
                onChange={(e) =>
                  setUser({ ...user, name: e.target.value })
                }
                className="w-full mt-2 p-3 rounded-lg bg-gray-50 border"
              />
            </div>

            <div>
              <label className="text-gray-500 text-sm">Email</label>
              <input
                type="email"
                value={user.email || ""}
                disabled={!edit}
                onChange={(e) =>
                  setUser({ ...user, email: e.target.value })
                }
                className="w-full mt-2 p-3 rounded-lg bg-gray-50 border"
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
                className="w-full mt-2 p-3 rounded-lg bg-gray-50 border"
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

          {/* RIGHT */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border flex flex-col items-center text-center">

            <img
              src={`https://ui-avatars.com/api/?name=${user.name || "User"}`}
              className="w-32 h-32 rounded-full border-4 border-gray-300"
              alt=""
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

            <button
              onClick={handleLogout}
              className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full"
            >
              Logout
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Account;