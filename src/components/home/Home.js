import React from "react";
import CommonSection from "../commonSection";
import "../home/home.scss";
import SecModal from "../secModal";
import ClientSection from "./clientSection";
import DerFinance from "./derFinance";
import FinacialGuide from "./finacialGuide";
import Footer from "./footer";
import Header from "./header";
import HeroBanner from "./heroBanner";
import TextSection from "./textSection";
import WirSection from "./wirSection";
export default function Home() {
  return (
    <div>
      <HeroBanner />
      <CommonSection />
      <FinacialGuide />
      <DerFinance />
      <ClientSection />
      <TextSection />
      <WirSection />
      {/* <SecModal/> */}
    </div>
  );
}
