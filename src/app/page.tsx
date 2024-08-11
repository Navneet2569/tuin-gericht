"use client";

import ContactInfo from "./_components/ContactInfo";
import Diensten from "./_components/Diensten";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Klanten from "./_components/Klanten";
import Offerte from "./_components/Offerte";
import OverOns from "./_components/Overons";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <OverOns />
      <Diensten />
      <Offerte />
      <Klanten />
      <ContactInfo />
      <Footer />
    </div>
  );
}
