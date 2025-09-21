import { useState } from "react"
export default function LoginPage(){
    const [isSignUp , SetIsSignUp] = useState(false);
    const [formData , setFormData] = useState({
      name: "",
      email:"",
      password:""
    })

    const handleChange= (e) =>{
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
      e.preventDefault()
      if (isSignUp){
        console.log("Sign up date:" , formData)
      }else{
        console.log("Sign-In Data : ", {
          email: formData.email,
          password: formData.password
        })
      }
    }


  

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        {isSignUp && (
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border rounded"
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        <p className="mt-4 text-center text-sm">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => SetIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  )
}

