import React, { useState, createContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./section/home/Home";
import Technology from "./section/technology/Technology";
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
        path: "/technology",
        element: <Technology />
      },
      {
        path: "/projects",
        element: <Project />
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
