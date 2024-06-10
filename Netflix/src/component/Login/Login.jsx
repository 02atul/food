import React, { useRef, useState } from "react";
import "./Login.css";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import { checkValidData } from "../../utilis/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utilis/firebase";
import { USER_AVATAR } from "../../utilis/constant";


const Login = () => {
  
  const dispatch =  useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleButtonClick();
  };

  const handleButtonClick = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const message = checkValidData(email, password);
    setErrorMessage(message);

    if (message) return;

    if (isSignInForm) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user,{
            displayName: name.current.value,
            photoURL: USER_AVATAR,
            })
          .then(()=>{
            dispatch()
           
          })
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
      </div>
      <form onSubmit={handleSubmit} className="w-3/12 p-12 bg-black bg-opacity-70 absolute my-36 mx-auto right-0 left-0 text-white rounded-lg z-10">
        <h1 className="font-bold text-3xl mb-4">{isSignInForm ? "Sign in" : "Sign up"}</h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            id="input-fullname"
            className="p-4 my-6 w-full bg-opacity-50 bg-black rounded-sm"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          id="input-email"
          className="p-4 my-6 w-full bg-opacity-50 bg-black rounded-sm"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          id="input-password"
          className="p-4 my-6 w-full bg-opacity-50 bg-black rounded-sm"
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button type="submit" className="p-4 my-6 bg-red-700 w-full rounded-sm">
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <p onClick={toggleSignInForm} className="cursor-pointer text-center">
          {isSignInForm ? "New to Netflix? Sign up now" : "Already have an account? Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
