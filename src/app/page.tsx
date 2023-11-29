import Header from "@/components/Header";
import Image from "next/image";
import HomePage from "./HomePage/page";
import Linking from "@/components/Linking";

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
}
