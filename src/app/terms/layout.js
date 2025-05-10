import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "CoachSavvy | Terms",
  description: "Get all your valourant tools here",
};

export default function TermsPageLayout({ children }) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
     
  );
}
