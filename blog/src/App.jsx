import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/ui/Error";

// Lazy-loaded components
const Home = React.lazy(() => import("./components/Home"));
const Project1 = React.lazy(() => import("./projects/project1/Project1"));
const AboutMeComponent = React.lazy(() =>
  import("./components/AboutMeComponent")
);

// Router configuration with lazy-loaded routes
const router = createBrowserRouter([
  {
    element: <Layout />, // Common layout for all child routes
    errorElement: <Error />,
    children: [
      {
        path: "/MyBlog",
        element: (
          <Suspense fallback={<div>Loading Home...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/MyBlog/about",
        element: (
          <Suspense fallback={<div>Loading About Me...</div>}>
            <AboutMeComponent />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/MyBlog/projects/project1",
    element: (
      <Suspense fallback={<div>Loading Project 1...</div>}>
        <Project1 />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
