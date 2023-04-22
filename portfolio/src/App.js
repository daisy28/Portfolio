import React, { useState, createContext } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import Project from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import style from "./styles/style.module.css";

export const ThemeContext = createContext(null);
const Layout = () => {
  const [lightTheme, setLightTheme] = useState(false);
  const toggleTheme = () => {
    setLightTheme(prevTheme => !prevTheme)
  }
  return (
    <ThemeContext.Provider value={lightTheme}>
      <Nav toggleTheme={toggleTheme} />
      <Outlet />
    </ThemeContext.Provider>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/projects",
        element: <Project />
      },
      {
        path: "/experience",
        element: <Experience />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  }
]);


const App = () => {
  return (
    <AnimatePresence mode="wait">
      <div className={`${style.home}`}>
        <RouterProvider router={router} />
      </div>
    </AnimatePresence>
  );
}

export default App;
