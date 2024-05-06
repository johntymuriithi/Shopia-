// Sign Up Component For users
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { notifyError } from "../Utils/notifications.js";

const SignUp = () => {
  //
  // State to hold Form Data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });
  // Form Processing State
  const [formProcess, setFormProcess] = useState({
    loading: false,
    success: true,
    error: false,
  });

  // Navigation instance
  const navigate = useNavigate();

  // Handler Functions
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      setFormProcess({ ...formProcess, error: true });
      return;
    }
    setFormProcess({ ...formProcess, loading: true });
    try {
      // Make Api call to back end and await response
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      //   Decode Response and see
      const data = await response.json();

      // When registration fails, throw error
      if (data.statusCode !== 201) {
        throw new Error(data.message);
      }

      // Clean up Form Data
      setFormProcess({ loading: false, success: true, error: false });
      setFormData({ loading: false, success: true, error: false });

      // Redirect to the Sign In Page
      navigate("/signin");

      // Catch Possible Errors
    } catch (error) {
      setFormProcess({ loading: false, success: false, error: false });
      // Handle Necessary Error
      notifyError(error.message);
    }
  };

  // onChange Form Handler
  const handleFormChange = (e) => {
    setFormProcess({ loading: false, success: true, error: false });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Return to DOM
  return (
    <motion.div
      className="w-full max-w-screen-xl p-4 md:p-16 mx-auto dark:bg-darkSec"
      initial={{ x: "90%" }}
      animate={{ x: 0 }}
      exit={{ x: "-130%" }}
    >
      <form
        onSubmit={handleSignUp}
        className="w-full max-w-sm p-4 flex flex-col text-center gap-3 mx-auto shadow-2xl shadow-slate-200  rounded-2xl dark:bg-darkTer dark:shadow-darkPry"
      >
        <h1 className="md:text-2xl font-extrabold text-slate-900">
          Create Account
        </h1>

        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleFormChange}
          minLength={8}
          maxLength={25}
          required
          className="p-3 text-sm rounded-lg w-full outline-1 outline-slate-300 outline valid:outline-2 valid:outline-[#00B207]"
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleFormChange}
          className="p-3 text-sm rounded-lg w-full outline-1 outline-slate-300 outline valid:outline-2 valid:outline-[#00B207] transition ease-in"
        />

        {/* Password Input  */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          minLength={8}
          maxLength={25}
          onChange={handleFormChange}
          className={`p-3 text-sm rounded-lg w-full ${
            formProcess.error
              ? "outline-2 outline-red-600"
              : "outline-1 outline-slate-300 valid:outline-2 valid:outline-[#00B207]"
          } outline transition ease-in`}
        />

        {/* Confirm Password  */}
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          required
          minLength={8}
          maxLength={25}
          onChange={handleFormChange}
          className={`p-3 text-sm rounded-lg w-full ${
            formProcess.error
              ? "outline-2 outline-red-600"
              : "outline-1 outline-slate-300 valid:outline-2 valid:outline-[#00B207]"
          } outline transition ease-in`}
        />

        {/* Terms Check Box */}
        <label htmlFor="terms" className="text-xs w-[80%] mx-auto">
          <input type="checkbox" name="acceptTerms" id="terms" required /> By
          signing up you accept the Terms and Conditions of this platform.
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className={`p-3 text-sm rounded-lg w-full h-[60px] outline-1 outline-slate-300 outline ${
            formProcess.loading ? "bg-white" : "bg-[#00B207] text-white}"
          }`}
          disabled={formProcess.loading}
        >
          {formProcess.loading ? (
            <div className="flex flex-row gap-3 h-full justify-center items-center font-extrabold">
              <img src="walk-loading.gif" alt="..." className="h-full" />{" "}
              <span>Creating Account</span>
            </div>
          ) : (
            <p>Create Account</p>
          )}
        </button>

        {/* Redirect to Login */}
        <Link to="/signin">
          <p className="text-sm">
            Already have an account?{" "}
            <span className="font-extrabold text-[#00B207]">Login</span>
          </p>
        </Link>
      </form>
    </motion.div>
  );
};

export default SignUp;
