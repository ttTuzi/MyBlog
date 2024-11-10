import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/ui/Error";
import Home from "./components/Home";
import AboutMeComponent from "./components/AboutMeComponent";

const router = createBrowserRouter([
  {
    element: <Layout />, // Common layout for all child routes
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutMeComponent />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
