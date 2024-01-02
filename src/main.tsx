import React from "react"
import ReactDOM from "react-dom/client"
import "./App.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Skills from "./components/Skills"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const router = createBrowserRouter([
  { path: "/", element: <Layout><Home /></Layout> },
  { path: '/skills', element: <Layout><Skills /></Layout> },
  { path: '/projects', element: <Layout><Projects /></Layout> },
  { path: '/contact', element: <Layout><Contact /></Layout> }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
