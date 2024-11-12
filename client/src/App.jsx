import Navbar from "./components/Navbar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet, RouterProvider } from "react-router-dom";
import AddToCart from "./components/AddToCart.jsx";
import { createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import Payment from "./components/Payment.jsx";
import { Toaster } from "@/components/ui/toaster"

export default function ShoeStore() {
  const [cart, setCart] = useState([]);

  const removeFromCart = (shoeToRemove) => {
    setCart(cart.filter(shoe => shoe.id !== shoeToRemove.id));
  };
  const Layout = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1">
          <Dashboard />
          <Outlet />
        </div>
        <Footer />
        <Toaster/>
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
          element: <Home cart={cart} setCart={setCart} />,
        },
        {
          path: "/addtocart",
          element: <AddToCart removeFromCart={removeFromCart} cart={cart} />,
        },
      ],
    },
    {
      path: "/payment",
      element: <Payment />,
    },
  ]);
  return <RouterProvider router={router} />;
}
