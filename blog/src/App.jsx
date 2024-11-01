import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/ui/Error";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    element: <Layout />, // Common layout for all child routes
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
