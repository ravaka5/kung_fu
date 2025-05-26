"use client"
import { useState } from "react";
import { menuItems } from "../../../../public/assets/restaurant/data/menuItems";
import Image from "next/image";

const Page4 = () => {

  const [selectedCategory, setSelectedCategory] = useState<"tout" | "malgache" | "chinois" | "amuse-bouche">("tout");

  const filteredItems = selectedCategory === "tout"
    ? menuItems :
    menuItems.filter(items => items.category === selectedCategory)

  return (
    <div className='w-screen flex justify-center items-center mt-[4vw]'>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-center space-x-4 mb-12">
          {["tout", "malgache", "chinois", "amuse-bouche"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as typeof selectedCategory)}
              className={`px-6 py-2 rounded-full transition-all ${selectedCategory === category ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    width={400}
                    height={400}
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold text-red-600">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Page4
