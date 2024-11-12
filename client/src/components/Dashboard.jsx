import { useState } from "react";
import React from "react";
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  ChevronDown,
  Sidebar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router";
import { FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function Dashboard() {
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [background, setbackground] = useState(1)

  const handleclick = (id, route) => {
    navigate(route);
    setbackground(id)
  };
  return (
    <aside
      className={`${
        sidebarOpen ? "block" : "hidden"
      } lg:block w-64 bg-white shadow-xl p-4 fixed inset-y-0 left-0 z-10 overflow-y-auto transition-all duration-300 ease-in-out lg:relative lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex cursor-pointer justify-between items-center lg:hidden">
        <h2 className="text-xl font-semibold">Categories</h2>
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      <nav className="mt-5">
        <ul className="space-y-2 flex-col flex">
          <a
            onClick={() => handleclick(1, "/")}
            className={`${background===1?"bg-black text-white flex items-center gap-3 cursor-pointer  py-3 rounded-xl px-2 hover:bg-slate-700":"hover:text-gray-900 bg-white text-black flex items-center gap-3 cursor-pointer  py-3 rounded-xl px-2 hover:bg-slate-200"} `}
          >
            <FaHome size={20} className="ml-4" />
            Home
          </a>
          <a
            onClick={() => handleclick(2, "/addtocart")}
            className={`${background===2?"bg-black text-white flex items-center gap-3 cursor-pointer  py-3 rounded-xl px-2 hover:bg-slate-700":"hover:text-gray-900 bg-white text-black flex items-center gap-3 cursor-pointer  py-3 rounded-xl px-2 hover:bg-slate-200"}`}
          >
            <FaCartShopping size={20} className="ml-4" />
            Cart
          </a>
        </ul>
      </nav>
    </aside>
  );
}

export default Dashboard;
