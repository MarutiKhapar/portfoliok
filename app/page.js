import Header from "./components/home/Header";
import Footer from "./components/home/Footer";
import Chatbot from "./components/home/Chatbot";
import Analytics from "./components/home/Analytics";
import "./home.css";
import Hero from "./components/home/Hero";
import Achievements from "./components/home/Achievements";
import About from "./components/home/About";
import Expertise from "./components/home/Expertise";
import Projects from "./components/home/Projects";
import Experience from "./components/home/Experience";
import Contact from "./components/home/Contact";

export const metadata = {
  title: "Maruti Khapare — Search, Paid Media & Growth Strategy",
  description:
    "Maruti Khapare's growth portfolio: SEO, programmatic SEO, GEO, PPC, performance marketing and brand growth projects.",
  alternates: { canonical: "/" },
  verification: { google: "kBgf-h4W7siGwEF_eWLb7z5jBvGGbaRf0G6RXZ_Vb_M" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Achievements />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <Analytics />
    </>
  );
}
