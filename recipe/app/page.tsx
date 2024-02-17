"use client";

import { Hero } from "@/components";
import store from "@/services/store";
import Image from "next/image";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <main className=" overflow-hidden">
      <Provider store={store}>
        <Hero />
      </Provider>
    </main>
  );
}
