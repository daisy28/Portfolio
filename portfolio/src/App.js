import React, { useState, createContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Slider from "./components/Slider";
import Home from "./section/home/Home";
import About from "./section/home/About";
import Technology from "./section/technology/Technologies"
import Experience from "./section/technology/Experience";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Project from "./components/Projects";
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
        path: "/about",
        element: <About />
      },
      {
        path: "/technology",
        element: <Technology />
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
      <Slider />
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
