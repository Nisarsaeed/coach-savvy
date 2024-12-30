"use client";
import Image from "next/image";
import PaymentBrainTree from "./PaymentBrainTree";
import useFetchProducts from "@/hooks/useFetchProducts";

function ProductDetails({ id }) {
  const { products, loading } = useFetchProducts();
  if (loading) return <p>Loading categories...</p>;
  const product = products?.find((p) => p?._id === id);

  return (
    <div className="container py-6 h-fit">
      <h1 className="text-5xl font-bold tracking-wider ">{product?.name}</h1>
      <div className="grid grid-cols-2 gap-x-6 min-h-[30vh] mt-8 max-h-[50vh]">
        <div className="border-2 border-blue-900 rounded-2xl overflow-hidden relative ">
          <Image
            src={product?.image}
            alt="product Image"
            width={100}
            height={100}
            className=" absolute w-full h-full object-fill "
          />
        </div>
        <div className="overflow-hidden">
          <PaymentBrainTree />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
