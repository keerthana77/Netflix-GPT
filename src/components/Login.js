import { useState } from "react";
import Header from "./Header";

export default function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div className="">
        <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/ed78571e-37b5-4ce9-9092-f89e76680fa2/SG-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg" />
        </div>
        <form className="absolute p-12 bg-black w-4/12 my-24 mx-auto right-0 left-0 text-white bg-opacity-80" onSubmit={(e) => e.preventDefault()}>
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In': 'Sign Up'}</h1>
            {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded rounded-lg" />}
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded rounded-lg" />
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded rounded-lg" />
            <button className="p-4 my-4 bg-red-700 w-full">{isSignInForm ? 'Sign In': 'Sign Up'}</button>
            <p className="py-4 text-xl cursor-pointer" onClick={() => toggleSignInForm()}>
            {isSignInForm ? 'New to Netflix? Sign up now': 'Already registered? Sign In Now.'}
              </p>
        </form>
    </div>
  )
}
