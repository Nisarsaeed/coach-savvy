"use client";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Spacer from "@/components/ui/spacer";
import OrderNotification from "@/components/OrderNotification";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* <OrderNotification/> */}
      <Header/>
      <Hero />
      <Toaster />
      <Spacer />
      <Grid />
      <Spacer />
      <Footer/>
    </div>
  );
}
