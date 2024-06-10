import React, { useEffect } from 'react';
import './Body.css';
import Login from '../Login/Login';
import Browse from '../Browse/Browse';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";


const Body = () => {
  
  const auth = getAuth(); // Initialize the auth variable

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    }
  ]);

  

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
  