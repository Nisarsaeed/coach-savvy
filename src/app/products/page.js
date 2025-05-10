import Spacer from "@/components/ui/spacer";
import { GridBackground } from "@/components/ui/bg-grid";
import Header from "@/components/Header";
import ProductCategories from "@/components/ProductCategories";

export default function Products() {
  return (
    <div className="min-h-screen w-full relative">
      <Header/>
      <Spacer />
      <GridBackground/>
      <div className="text-primary min-h-[50vh] flex flex-col justify-center items-center relative z-10">
        <h3 className="font-semibold text-xl mb-3 uppercase text-center opacity-80">
          Explore our offers
        </h3>
        <h1 className="font-extrabold text-5xl mb-4 leading-normal text-center">
          All Products
        </h1>
      </div>
      <ProductCategories/>     
    </div>
  );
}
