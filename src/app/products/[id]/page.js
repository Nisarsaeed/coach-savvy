import Spacer from "@/components/ui/spacer";
import { ContentSwitcher } from "@/components/ContentSwitcher";
import ProductDetails from "@/components/ProductDetails";

export default async function ProductPage({ params }) {
  const { id } = await params; // Get the dynamic route parameter

  const detailsSections = [
    { id: 1, name: "Description" },
    { id: 2, name: "Requirements" },
    { id: 3, name: "Features" },
  ];

  return (
    <div className="min-h-screen w-full text-primary">
      <Spacer />
      <ProductDetails id={id} />
      <Spacer />
      <ContentSwitcher Tabs={detailsSections} Variant={2} />
    </div>
  );
}
