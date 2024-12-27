
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import Spacer from "@/components/ui/spacer";
import Image from "next/image";
import { ContentSwitcher } from "@/components/ContentSwitcher";
import PaymentBrainTree from "@/components/PaymentBrainTree";

export default async function ProductDetails({ params }) {
  const { id } = await params; // Get the dynamic route parameter
  const product = products.find((p) => p._id === parseInt(id));
  const detailsSections = [
    { id: 1, name: "Description" },
    { id: 2, name: "Requirements" },
    { id: 3, name: "Features" },
  ];

  if (!product) {
    return notFound(); // If the product is not found, show a 404 page
  }
  return (
    <div className="min-h-screen w-full text-primary">
      <Spacer />
      <div className="container py-6">
        <h1 className="text-5xl font-bold tracking-wider ">{product.title}</h1>
        <div className="grid grid-cols-2 gap-x-6 min-h-[30vh] mt-8">
          <div className="border-2 border-blue-900 rounded-2xl">
            <Image src={product.img} alt="product Image" width={200} height={200} className="object-cover h-full w-full" />
          </div>
          <div>
            <PaymentBrainTree/>
          </div>
        </div>
      </div>
      <ContentSwitcher Tabs={detailsSections} Variant={2}/>
    </div>
  );
}
