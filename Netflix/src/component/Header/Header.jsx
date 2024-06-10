import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../../utilis/userSlice';
import { LOGO } from '../../utilis/constant';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((Store)=>Store.user)
  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
       
      })
      .catch((error) => {
        // Handle sign-out error.
        console.error('Sign-out error: ', error);
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = auth.currentUser;
        dispatch(addUser({
           uid:uid,
            email:email,
             displayName:displayName,
            photoURL: photoURL,
            }));
            navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    // Cleanup subscription on unmount
    return () => unSubscribe()
    
  }, []);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src={LOGO}
        alt="Netflix Logo"
      />
     { user && (<div className="flex items-center justify-end p-2">
        <button onClick={handleSignOut} className="font-bold text-white">
          Sign Out
        </button>
      </div>)}
    </div>
  );
};

export default Header;
