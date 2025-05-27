"use client";

import { useState } from "react";
import { menuItems } from "../../../../public/assets/restaurant/data/menuItems";
import Image from "next/image";

type Category = "tout" | "malgache" | "chinois" | "amuse-bouche";

const Page4 = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("tout");

  const filteredItems = selectedCategory === "tout"
    ? menuItems
    : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Menu de catégories */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["tout", "malgache", "chinois", "amuse-bouche"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as Category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all 
                ${selectedCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Liste des plats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  fill
                  src={item.image}
                  alt={item.name}
                  className="object-cover rounded-t-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full capitalize">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-red-600 font-bold text-lg">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page4;
