"use client";
import { AddTask, ListTask } from "@/components";
import { Provider } from "react-redux";
import Image from "next/image";
import { store } from "@/services/store";

export default function Home() {
  return (
    <main className="flex justify-center items-center p-10">
      <div>
        <Provider store={store}>
          <AddTask />
          <ListTask />
        </Provider>
      </div>
    </main>
  );
}
