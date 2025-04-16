import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import NotFound from "./components/NotFound";

// Lazy-loaded components
const Home = React.lazy(() => import("./components/Home"));
const Project1 = React.lazy(() => import("./projects/project1/Project1"));
const AboutMeComponent = React.lazy(() =>
  import("./components/AboutMeComponent")
);
const Projects = React.lazy(() => import("./components/Projects"));

// Router configuration with lazy-loaded routes
const router = createBrowserRouter([
  {
    element: (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    ),
    children: [
      {
        path: "/MyBlog",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/MyBlog/about",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <AboutMeComponent />
          </Suspense>
        ),
      },
      {
        path: "/MyBlog/projects",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "/MyBlog/projects/project1",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Project1 />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
