"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../utils/Apis";
import { login, loadUser } from "../libs/features/authSlice";
import { FaLock } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  // Load user data on mount
  // useEffect(() => {
  //   dispatch(loadUser());
  // }, [dispatch]);

  // // Redirect if already logged in
  // useEffect(() => {
  //   if (auth.user) {
  //     router.push("/appdata");
  //   }
  // }, [auth.user, router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setErrorMessage(null);
  //   setSuccessMessage(null);

  //   if (!formData.email || !formData.password) {
  //     setErrorMessage("Both email and password are required.");
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     const { token, user } = await loginUser(formData);

  //     dispatch(login({ token, user }));
  //     setSuccessMessage("Login successful! Redirecting...");

  //     // Wait a bit before redirecting to allow the success message to show
  //     setTimeout(() => {
        router.push("/appdata");
  //     }, 1000); // 1 second delay before redirecting
  //   } catch (error) {
  //     setErrorMessage("Invalid email or password, or an error occurred.");
  //     console.error("Error during login:", error);
  //   } finally {
  //     setLoading(false);
  //   }
   };

  return (
    <div className="w-full  mx-auto p-2 md:p-4">
      <div className="w-full inset-0 flex justify-center items-center">
        <div className="bg-none p-4 md:p-6 rounded-lg w-full md:w-2/4 lg:w-2.2/4">
          <form onSubmit className="space-y-6">

            {/* Email Input */}
            <div>
              <label className="block text-xs">Email *</label>
              <div className="border border-gray-300 bg pl-3 flex justify-center items-center gap-4 rounded w-full">
                <LuMail className="text-[#6358DC] text-2sx" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-none bg-[#F2F4F6] p-2 w-full "
                  required
                />
              </div>
            </div>



            {/* Success Message */}
            {successMessage && (
              <div className="text-green-500 text-sm">{successMessage}</div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className={`bg-[#6358DC] w-full text-xs text-white p-3 rounded hover:bg-[#0e2c4f] ${loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onSubmit={handleSubmit}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>

            {/* Google login */}
            <div className="text-right">
              <button
                type="submit"
                className={`bg-white shadow-black w-full text-black flex justify-center text-[16px] items-center gap-4 px-4 py-2 rounded shadow-sm }`}
              >
                <Image src="/assets/google.png" width={0} height={0} className="w-[20px] h-auto" alt="Logo" />
                Log in with Google
              </button>
            </div>
            
            <p className="text-center text-xs">
              Don't have an account? <a className="text-[#6358DC]" href="">Talk to sales rep</a>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
