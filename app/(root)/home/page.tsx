import Image from "next/image";
import Navigation from "../../../components/Navigation";
import CardGrid from "../../../components/CardGrid";
import React, { useState } from 'react';
import Footer from "../../../components/Footer";

export default function Home() {
  return (
    <main className="bg-base-300">
      <Navigation></Navigation>
      <CardGrid></CardGrid>
      <Footer></Footer>
    </main>
  );
}
