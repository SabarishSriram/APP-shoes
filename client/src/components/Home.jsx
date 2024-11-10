import React, { useEffect, useState } from "react";
import {shoes} from "../lib/shoes.js"
import { Button } from "@/components/ui/button";
import axios from "axios";

function Home() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   // Use an async function within the useEffect
  //   const fetchData = async () => {
  //     const response = await axios.get("http://localhost:8080/products");
  //     setData(response.data);
  //     console.log(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <main className="flex-grow container mx-auto px-4 py-8 lg:ml-6">
      <h1 className="text-3xl font-bold mb-6">Featured Shoes</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {shoes.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img src={shoe.image} alt={shoe.name} className="w-full h-48" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{shoe.name}</h2>
              <p className="text-gray-600">${shoe.price}</p>
              <Button className="w-full mt-4">Add to Cart</Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
