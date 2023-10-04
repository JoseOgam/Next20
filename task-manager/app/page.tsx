import { AddTask, ListTask } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center p-10">
      <div>
        <AddTask />
        <ListTask />
      </div>
    </main>
  );
}
