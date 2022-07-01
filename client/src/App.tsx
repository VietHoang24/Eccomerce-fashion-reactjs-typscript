import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Auth from "./shop/pages/auth/auth";
import Layout from "./shop/layout/Layout";
import Home from "./shop/pages/home/Home";
import SignInForm from "./shop/components/auth/Signin"
import SignUpForm from "./shop/components/auth/Singup"

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "auth",
          element: <Auth />,
          children:[
            {path: "/auth/sign-up", element:<SignUpForm/>},
            {path: "/auth/sign-in", element:<SignInForm/>},
            
          ]
        },
      ],
    },
    { path: "auth", element: "" },
  ]);

  return element;
}

export default App;
