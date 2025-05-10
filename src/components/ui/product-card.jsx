import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { TbPointFilled } from "react-icons/tb";

function Card({ img, name, price, className,url }) {
  return (
    <div
      className={`w-full max-w-sm border border-accentPurple rounded-lg shadow text-primary bg-accentBlue group p-4 ${className}`}
    >
      <Link href={url}>
        <Image
          height={50}
          width={50}
          className="object-cover w-full transform transition-transform duration-300 group-hover:scale-105 "
          src={img}
          alt="product image"
        />
        <div className="pt-4 flex justify-between">
          <h2 className="text-lg col-span-2 font-semibold">{name}</h2>
          <h3 className="text-lg opacity-70">£{price}</h3>
        </div>
        <div className="pt-4 flex justify-between">
        <div className="flex items-center space-x-1 z-20">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className="text-yellow-300 drop-shadow-[0_0_6px_rgba(255,223,0,0.7)]"
            />
          ))}
        </div>
        <div className="text-green-600 flex items-center space-x-1 font-semibold">
          <TbPointFilled size={25} className="drop-shadow-[0_0_5px_rgba(0,255,0,0.8)]"/>
          <span>Be the Best</span>
        </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
