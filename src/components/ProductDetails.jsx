"use client";
import Image from "next/image";
import useFetchProducts from "@/hooks/useFetchProducts";
import { useState,useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";


export default function ProductDetails({ id, userAuth }) {
  const dispatch = useDispatch();
  const { products, loading } = useFetchProducts();
  const [quantity, setQuantity] = useState(1);
  const product = products?.find((p) => p?._id === id);
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter()
  
  useEffect(() => {
    if (product) {
      setTotalPrice(quantity * product.price);
    }
  }, [product, quantity]);

  if (loading || !product) {
    return <p>Loading product…</p>;
  }


  const handleContinue = async () => {
    // 1) Add current product to cart
    dispatch(
      addToCart({
        id:   product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
      })
    );

    // 2a) If not signed in, trigger Discord sign-in (will redirect)
    if (!userAuth) {
      await signIn("discord", {
        callbackUrl: "/checkout", // NextAuth will send them here after auth
      });
      return; // NextAuth handles the navigation
    }

    // 2b) Already signed in → just navigate client-side
    router.push("/checkout");
  };

  return (
    <div className="container py-6 mt-5">
      <h3 className="text-3xl font-bold">{product.name}</h3>

      <div className="grid grid-cols-3 gap-x-6 mt-8">
        <div className="col-span-2 border rounded overflow-hidden relative min-h-[50vh]">
          <Image
            src={product?.image}
            alt={product.name}
            width={1000}
            height={1000}
            className="absolute w-full h-full object-fill"
          />
        </div>

        <div className="bg-blue-950 p-6 rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quantity</h3>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full p-2 rounded text-black"
            />
          </div>

          <div className="mt-4 flex justify-between">
            <span>Total</span>
            <span>£{totalPrice.toFixed(2)}</span>
          </div>

          <button
            onClick={handleContinue}
            className="mt-6 w-full bg-[#4856ee] hover:bg-[#3c48c4] text-white py-3 rounded-md flex items-center justify-center gap-2"
          >
            {userAuth
              ? `Continue as ${userAuth.name}`
              : "Continue with Discord"}
          </button>
        </div>
      </div>
    </div>
  );
}