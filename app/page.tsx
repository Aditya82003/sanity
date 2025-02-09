import Hero from "@/section/Hero";
import PlatformOverview from "@/section/PlatformOverview";
import SanityUnlock from "@/section/FutureUnlock";
import { FC } from "react";
import Makemagic from "@/section/Makemagic";
import Sales from "@/section/Sales";

const Home:FC=()=> {
  return (
    <main>
      <Hero/>
      <PlatformOverview />
      <SanityUnlock/>
      <Sales/>
      <Makemagic/>
    </main>
  );
}
export default Home
