import Header from "./components/home/Header";
import Footer from "./components/home/Footer";
import Chatbot from "./components/home/Chatbot";
import PageSchema from "./components/StructuredData";
import Faq from "./components/home/Faq";
import { pageMetadata } from "./lib/seo";
import "./home.css";
import Hero from "./components/home/Hero";
import Achievements from "./components/home/Achievements";
import About from "./components/home/About";
import Expertise from "./components/home/Expertise";
import Projects from "./components/home/Projects";
import Experience from "./components/home/Experience";
import Contact from "./components/home/Contact";

export const metadata = {
  ...pageMetadata("home"),
  verification: { google: "kBgf-h4W7siGwEF_eWLb7z5jBvGGbaRf0G6RXZ_Vb_M" },
};

export default function Home() {
  return (
    <>
      <PageSchema pageKey="home" />
      <Header />
      <main>
        <Hero />
        <Achievements />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
