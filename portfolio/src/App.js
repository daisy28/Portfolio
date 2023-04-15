import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import About from "./components/About";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Project from "./components/Projects";
import Technologies from "./components/Technologies";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
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
])


const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
