// Menu.tsx
import React from 'react';

const Menu: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full mx-4 sm:mx-auto space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">Pizza Restaurant</h1>
        <div className="bg-gray-200 rounded-lg p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Order Now</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold text-gray-800">Margherita Pizza</h3>
            <p className="text-gray-600">Classic cheese and tomato base</p>
            <p className="text-xl font-semibold text-gray-800 mt-2">$9.99</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold text-gray-800">Pepperoni Pizza</h3>
            <p className="text-gray-600">Spicy pepperoni, cheese, and tomato base</p>
            <p className="text-xl font-semibold text-gray-800 mt-2">$11.99</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold text-gray-800">Vegetarian Pizza</h3>
            <p className="text-gray-600">Assorted vegetables, cheese, and tomato base</p>
            <p className="text-xl font-semibold text-gray-800 mt-2">$10.99</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold text-gray-800">Meat Lovers Pizza</h3>
            <p className="text-gray-600">Bacon, sausage, pepperoni, cheese, and tomato base</p>
            <p className="text-xl font-semibold text-gray-800 mt-2">$13.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
