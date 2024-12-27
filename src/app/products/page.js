"use client";

import Spacer from "@/components/ui/spacer";
import { ContentSwitcher } from "@/components/ContentSwitcher";
import { useState, useEffect } from "react";

export default function Products() {
  const [categories, setCategories] = useState(null)
  useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch("/api/categories", { method: "GET" });
          if (!response.ok) {
            throw new Error("Failed to fetch categories");
          }
          const data = await response.json();
  
          // Assuming the API returns an object with a `categories` field
          if (Array.isArray(data.categories)) {
            setCategories(data.categories); // Extract the array
          } else {
            throw new Error("Unexpected API response structure");
          }
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
  
      fetchCategories();
    }, []);
    console.log(categories)
  return (
    <div className="min-h-screen w-full">
      <Spacer />
      <div className="text-primary min-h-[40vh] flex flex-col justify-center items-center">
        <h3 className="font-semibold text-xl mb-3 uppercase text-center opacity-80">
          Explore our offers
        </h3>
        <h1 className="font-extrabold text-5xl mb-4 leading-normal text-center">
          All Products
        </h1>
      </div>
      <ContentSwitcher Tabs={categories} Variant={1}/>
      
    </div>
  );
}
