import Head from "next/head";
import Footer from "../components/all/footer";
import Header from "../components/all/header";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
