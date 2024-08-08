"use client";

import Diensten from "./_components/Diensten";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
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
    </div>
  );
}
