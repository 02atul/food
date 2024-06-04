import React, { useRef, useState } from "react";
import "./Login.css";
import Header from "../Header/Header";
import { checkValideData } from "../../utilis/validate";
 import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
 import { auth } from "../../utilis/firebase";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null)
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Add your form submission logic here
  };

  const handleButtonClick = () => {
    console.log(password);
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValideData(email.current.value, password.current.value);
     setErrorMessage(message);
     console.log(message);

     if(message) return;


     if(!isSignInForm){
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
      )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"- "+ errorMessage)
    // ..
  });
     }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form onSubmit={handleSubmit} className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded bg-opacity-70">
        <h1 className="font-bold text-3xl mb-4">{isSignInForm ? "Sign in" : "Sign up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          id="input-button"
          className="p-4 my-6 w-full bg-opacity-50 bg-black rounded-sm"
        />}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          id="input-button"
          className="p-4 my-6 w-full bg-opacity-50 bg-black rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          id="input-button1"
          className="p-4 my-6 w-full bg-opacity-50 bg-black rounded-sm"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button type="button" onClick={handleButtonClick} className="p-4 my-6 bg-red-700 w-full">
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <p onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign up now" : "Already have an account? Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
