import Navbar from "./components/Navbar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet, RouterProvider } from "react-router-dom";
import AddToCart from "./components/AddToCart.jsx";
import { createBrowserRouter } from "react-router-dom";

export default function ShoeStore() {
  const Layout = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1">
          <Dashboard />
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/addtocart",
          element: <AddToCart />,
        },
      ],
    }
  ]);
  return <RouterProvider router={router} />;
}
