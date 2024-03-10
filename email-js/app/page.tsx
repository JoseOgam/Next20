import Image from "next/image";
import { Hero, Navbar, About } from "@/components";

export default function Home() {
  return (
    <main className="relative z-0">
      <div>
        <Navbar />
        <Hero />
      </div>
      <div>
        <About />
      </div>
    </main>
  );
}
