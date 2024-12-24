"use client";

import { useState } from "react";
import Card from "@/components/ui/card";
import { products } from "@/lib/data";
import Spacer from "@/components/ui/spacer";
import { ContentSwitcher } from "@/components/ContentSwitcher";


export default function Products() {
  const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Valorant" },
    { id: 3, name: "Spoofers" },
    { id: 4, name: "Accounts" },
  ];
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
