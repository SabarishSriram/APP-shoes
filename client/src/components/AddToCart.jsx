import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";

function AddToCart({ cart, removeFromCart }) {
  const totalAmount = cart.reduce((total, shoe) => total + shoe.price, 0);
  const navigate=useNavigate();

  return (
    <main className="flex-grow container mx-auto px-4 py-8 lg:ml-6">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {cart.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img src={shoe.image} alt={shoe.name} className="w-full h-48" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{shoe.name}</h2>
              <p className="text-gray-600">${shoe.price}</p>
              <Button
                onClick={() => removeFromCart(shoe)}
                className=" bg-red-700 w-full mt-4"
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-xl mt-5 font-bold py-5 text-center">Generated Bill:</h1>
        <div className="flex w-80 justify-between">
          <span className="text-center text-xl ">
            {cart.map((shoe) => (
              <p>{shoe.name}</p>
            ))}
          </span>
          <span className="text-center text-xl ">
            {cart.map((shoe) => (
              <p>{shoe.price}</p>
            ))}
          </span>
        </div>
        <div className="text-center text-xl font-bold mt-4">
          Total: ${totalAmount.toFixed(2)}
        </div>
        
        <div className="flex justify-center">
          <Button onClick={()=>navigate('/payment')} className="bg-green-500 text-lg py-5 px-10 mt-5">Checkout</Button>
        </div>
      </div>
    </main>
  );
}

export default AddToCart;
