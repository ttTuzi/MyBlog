import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/ui/Error";
import Home from "./components/Home";
import Project1 from "./projects/project1/Project1";
import AboutMeComponent from "./components/AboutMeComponent";

const router = createBrowserRouter([
  {
    element: <Layout />, // Common layout for all child routes
    errorElement: <Error />,
    children: [
      {
        path: "/MyBlog",
        element: <Home />,
      },
      {
        path: "/MyBlog/about",
        element: <AboutMeComponent />,
      },
    ],
  },
  {
    path: "/MyBlog/projects/project1",
    element: <Project1 />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
