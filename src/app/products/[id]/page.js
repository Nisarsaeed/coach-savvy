import Spacer from "@/components/ui/spacer";
import { ContentSwitcher } from "@/components/ContentSwitcher";
import ProductDetails from "@/components/ProductDetails";
import Header from "@/components/Header";
import ProductFeatures from "@/components/ProductFeatures";
import { getUserAuth } from "@/lib/serverActions";

export default async function ProductPage({ params }) {
  const { id } = await params; // Get the dynamic route parameter

  
  const {user} = await getUserAuth();

  return (
    <div className="min-h-screen w-full text-primary">
      <Header/>
      <Spacer />
      <ProductDetails id={id} userAuth={user} />
      {/* <Spacer /> */}
      <ProductFeatures/>
    </div>
  );
}
