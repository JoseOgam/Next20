"use client";

import { Hero, List } from "@/components";
import store from "@/services/store";
import Image from "next/image";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 overflow-hidden">
      <div>
        <Provider store={store}>
          <Hero />
          <List />
        </Provider>
      </div>
    </main>
  );
}
