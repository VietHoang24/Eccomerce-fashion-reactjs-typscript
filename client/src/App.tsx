import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRoutes } from "react-router-dom";

import Layout from './components/shop/layout/Layout';
import Home from './components/shop/components/home/Home';

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
        { path: "tasks", element:"" },
      ],
    },
    { path: "team", element:""},
  ]);

  return element;
}

export default App;
