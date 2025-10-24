import { api } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res;
      if (isSignUp) {
        res = await api.signup(formData.name, formData.email, formData.password);
      } else {
        res = await api.login(formData.email, formData.password);
      }

      if (res.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        alert("Login successful!");
        navigate("/home");
      } else {
        alert(res.message || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      alert("Server error!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100"
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="bg-blue-500 text-white text-lg font-bold px-3 py-1 rounded-md shadow-sm">
              HOSTEL
            </div>
            <span className="text-blue-600 font-bold text-lg">ADDA</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            {isSignUp ? "Create an Account" : "Welcome Back!"}
          </h2>
          <p className="text-gray-500 text-sm">
            {isSignUp ? "Join your hostel community today" : "Sign in to continue"}
          </p>
        </div>

        {/* Form Fields */}
        {isSignUp && (
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-600 mb-1 block">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600 mb-1 block">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium text-gray-600 mb-1 block">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        {/* Toggle Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
          <span
            className="text-blue-600 cursor-pointer font-medium hover:underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
}
