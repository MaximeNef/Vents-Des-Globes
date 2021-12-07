import Head from "next/head";
import Footer from "../components/all/footer";
import Header from "../components/all/header/index.tsx";
import Hero from "../components/hero/index.tsx";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
