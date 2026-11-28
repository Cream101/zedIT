import Reveal from "@/components/Reveal";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import References from "@/components/References";
import DigitalTwin from "@/components/DigitalTwin";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <Reveal><Stats /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Capabilities /></Reveal>
        <Reveal><Education /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Certificates /></Reveal>
        <Reveal><References /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <DigitalTwin />
    </>
  );
}
