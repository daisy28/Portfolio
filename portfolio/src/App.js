import React, { useState, createContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "./components/About";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Project from "./components/Projects";
import Technologies from "./components/Technologies";
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
        path: "/projects",
        element: <Project />
      },
      {
        path: "/experience",
        element: <Experience />
      },
      {
        path: "/technologies",
        element: <Technologies />
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
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
