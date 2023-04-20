import React, { useState, createContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import style from "./styles/style.module.css"
import Home from "./section/home/Home";
import About from "./section/home/About";
import Technology from "./section/technology/Technologies"
import Experience from "./section/technology/Experience";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
      <Footer />
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
      <div className={`${style.home} fixed top-0 right-0 left-0 bottom-0`}>
        <RouterProvider router={router} />
      </div>
    </AnimatePresence>
  );
}

export default App;
