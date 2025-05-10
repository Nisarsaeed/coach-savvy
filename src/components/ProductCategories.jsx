"use client";
import { useState } from "react";
import Card from "./ui/product-card";
import useFetchProducts from "@/hooks/useFetchProducts";
import { Skeleton } from "./ui/skeleton";
import useFetchCategories from "@/hooks/useFetchCategories";

function ProductCategories() {
  const { categories, isCatLoading } = useFetchCategories();
  const { products, error, loading } = useFetchProducts();
  const allCatId = "676872aad5dce6ddc4830205";
  const [activeTab, setActiveTab] = useState(allCatId);

  const filteredProducts =
    activeTab === allCatId
      ? products
      : products?.filter((item) => item.category === activeTab);
  const activeCategoryStyles = "!opacity-100 border-b-2";

  return (
    <div className="container mt-5 ">
      {isCatLoading ? (
        <div className=" border rounded-xl  ">
          <div className="h-14 w-full rounded-xl bg-gray-800 flex items-center space-x-8 p-3 animate-pulse ">
            {Array(4)
              .fill()
              .map((_, index) => (
                <Skeleton
                  className="h-8 w-20 rounded-md bg-gray-600"
                  key={index}
                />
              ))}
          </div>
        </div>
      ) : (
        <nav className="border-blue-900 bg-accentBlue flex shadow-[0_0_30px_rgba(102,_23,_203,_0.8)] border-2 rounded-xl">
          {categories?.map((item, i) => {
            return (
              <span
                key={i}
                className={`text-primary ms-4 sm:ms-8 sm:font-medium md:text-lg py-3 px-6 cursor-pointer opacity-60 ${
                  item?._id == activeTab ? activeCategoryStyles : ""
                } ${item?._id === allCatId ? "order-first" : ""}`}
                onClick={(e) => {
                  setActiveTab(item?._id);
                }}
              >
                {item?.name}
              </span>
            );
          })}
        </nav>
      )}

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-14">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="flex flex-col space-y-3 p-4 border rounded-xl shadow-lg bg-gray-800"
              >
                <Skeleton className="h-[180px] w-full rounded-md bg-gray-700" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4 rounded-md bg-gray-700" />
                  <Skeleton className="h-4 w-1/2 rounded-md bg-gray-700" />
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-14">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <Card
                key={item._id}
                img={item.image}
                name={item.name}
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
      )}
    </div>
  );
}

export default ProductCategories;
