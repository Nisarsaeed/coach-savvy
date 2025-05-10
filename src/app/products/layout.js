import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GridBackground } from "@/components/ui/bg-grid";

export const metadata = {
  title: "CoachSavvy | Products",
  description: "Get all your valourant tools here",
};

export default function ProductPageLayout({ children }) {
  return (
    <div>
        {children}
        <Footer/>
    </div>
     
  );
}
