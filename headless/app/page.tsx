import { SearchBar, Hero, CustomFilter } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" px-14 pt-16 overflow-hidden">
      <Hero />

      <div className="home__text-container">
        <h1 className=" text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars that you might like</p>
      </div>
      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
      </div>
    </main>
  );
}
