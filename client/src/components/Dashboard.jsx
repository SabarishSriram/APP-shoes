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

function Dashboard() {
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate=useNavigate()

  return (
    <aside
      className={`${
        sidebarOpen ? "block" : "hidden"
      } lg:block w-64 bg-gray-100 p-4 fixed inset-y-0 left-0 z-10 overflow-y-auto transition-all duration-300 ease-in-out lg:relative lg:translate-x-0 ${
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
          <a onClick={()=>navigate("/")} className="text-black hover:text-gray-900 cursor-pointer bg-white py-3 rounded-xl px-2 hover:bg-slate-200">
            Home
          </a>
          <a onClick={() => navigate("/addtocart")} className="text-black hover:text-gray-900 bg-white cursor-pointer py-3 rounded-xl px-2 hover:bg-slate-200">
            Add To Cart
          </a>
          
        </ul>
      </nav>
    </aside>
  );
}

export default Dashboard;
