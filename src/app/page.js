import Banner from "@/conponents/Banner";
import TopGenerations from "@/conponents/TopGenerations";
import Image from "next/image";
import About from "@/conponents/About";
export default function Home() {
  return (
    <div>
       <Banner></Banner>
       <TopGenerations></TopGenerations>
       <About></About>
    </div>
  );
}
