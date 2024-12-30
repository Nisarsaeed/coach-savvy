"use client";
import { useState } from "react";
import Card from "./ui/product-card";
import useFetchProducts from "@/hooks/useFetchProducts";

export const ContentSwitcher = ({ Tabs, Variant }) => {
  const allCatId = "676872aad5dce6ddc4830205";
  const [activeTab, setActiveTab] = useState(allCatId);

  const {products, error, loading} = useFetchProducts();
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching Products: {error}</p>;
  
  const filteredContent =
    activeTab === allCatId
      ? products
      : products?.filter((item) => item.category === activeTab);
  console.log(filteredContent);
  const activeCategoryStyles = "!opacity-100 border-b-2";
 
  return (
    <div className="container mt-5 ">
      <nav
        className={` border-blue-900 bg-accentBlue  ${
          Variant == 1
            ? " flex shadow-[0_0_30px_rgba(102,_23,_203,_0.8)]   border-2 rounded-xl"
            : "bg-blue-950 !rounded-t-xl shadow-[0_-10px_30px_rgba(102,_23,_203,_0.8)] p-4"
        }`}
      >
        {Tabs?.map((item, i) => {
          return (
            <span
              key={i}
              className={`text-primary ms-4 sm:ms-8 sm:font-medium md:text-lg py-3 px-6 cursor-pointer opacity-60 ${
                item?._id == activeTab ? activeCategoryStyles : ""} ${item?._id === allCatId ? 'order-first': ''}`}
              onClick={(e) => {
                setActiveTab(item?._id);
              }}
            >
              {item?.name}
            </span>
          );
        })}
      </nav>
      {Variant == 1 && filteredContent && (
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-14 ">
          {filteredContent && filteredContent.length > 0 ? (
            filteredContent.map((item, i) => (
              <Card
                key={i}
                img={item.image}
                name={item.title}
                price={item.price}
                className="col-span-1"
                url={`/products/${item._id}`}
              />
            ))
          ) : (
            <span className="text-primary text-center w-full col-span-4 text-lg min-h-[50vh]">
              No products found!
            </span>
          )}
        </div>
      ) }
      {Variant == 2 && (
        <div className=" rounded-b-xl bg-blue-900 p-12 shadow-[0_10px_30px_rgba(102,_23,_203,_0.8)]">
          {activeTab == 1 && (
            <p>
              We guarantee that our cheats work flawlessly while ensuring they
              are as affordable as possible compared to other brands. Our team
              provides 24/7 active support to assist you with any issues you may
              encounter.
            </p>
          )}
          {activeTab == 2 && (
            <p>
              We guarantee that our cheats work flawlessly while ensuring they
              are as affordable as possible compared to other brands. Our team
              provides 24/7 active support to assist you with any issues you may
              encounter.
            </p>
          )}
          {activeTab == 3 && (
            <p>
              We guarantee that our cheats work flawlessly while ensuring they
              are as affordable as possible compared to other brands. Our team
              provides 24/7 active support to assist you with any issues you may
              encounter.
            </p>
          )}
        </div>
      )}
    </div>
  );
};
