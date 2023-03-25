import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OriginalModel from "../components/OriginalModel";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" sizes="180x180" href="/logo.png"></link>
        <title>BackToLife</title>
      </Head>
      <main className="bg-gradient-to-br from-[#8034BB]/[5%] to-[#ED14CA]/[5%]">
        <Header />
        <Hero />
        <OriginalModel />
        <Footer />
      </main>
    </div>
  );
}
