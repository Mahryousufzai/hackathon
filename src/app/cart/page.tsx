// CartPage.tsx
import React from "react";


const CartPage: React.FC = () => {
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 25,
      quantity: 2,
      image: "/images/bottle.png", // Placeholder image URL
    },
    {
      id: 2,
      name: "Product 2",
      price: 15,
      quantity: 1,
      image: "/images/flyovers.png", // Placeholder image URL
    },
    
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
  <div className="bg-[#f9f9f9]">
      <div className="px-4 py-8 md:mx-20">
      <h1 className="text-3xl font-bold mb-4">Your Shopping Cart</h1>
      <div className="bg-transparent p-4">
        {cartItems.length > 0 ? (
          <>
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b py-4 last:border-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-md"
                  />
                  <div className="flex-1 px-4">
                    <h2 className="text-lg font-medium">{item.name}</h2>
                    <p className="text-sm text-gray-500">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium">${item.price * item.quantity}</p>
                </li>
              ))}
            </ul>
            <div className="border-t mt-4 pt-4 flex flex-col items-end">
              <h2 className="text-lg font-bold">
                Total: <span className="text-blue-600">${totalPrice}</span>
              </h2>
              <button className="mt-4 w-fit bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition">
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  </div>
  );
};

export default CartPage;
