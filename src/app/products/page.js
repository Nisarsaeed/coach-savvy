"use client";

import Spacer from "@/components/ui/spacer";
import { ContentSwitcher } from "@/components/ContentSwitcher";
import useFetchCategories from "@/hooks/useFetchCategories";

export default function Products() {
  const {categories,loading,error} = useFetchCategories();
  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error}</p>;
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
