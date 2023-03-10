import Head from "next/head";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import HowItWorks from "./components/HowItWorks";
import Proof from "./components/Proof";
import Footer from "./components/Footer";
import OriginalModel from "./components/OriginalModel";

export default function Home() {
  return (
    <div className="">
      <Head>
        <link rel="icon" sizes="180x180" href="/logo.png"></link>
        <title>BackToLife</title>
      </Head>
      <Navigation />
      <Header />
      <Proof />
      <HowItWorks />
      <OriginalModel />
      <Footer />
    </div>
  );
}
