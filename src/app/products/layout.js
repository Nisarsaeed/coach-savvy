import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "CheatSavant | Products",
  description: "Get all your valourant tools here",
};

export default function ProductPageLayout({ children }) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
     
  );
}
