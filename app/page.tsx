import Hero from "@/section/Hero";
import PlatformOverview from "@/section/PlatformOverview";
import SanityUnlock from "@/section/SanityUnlock";
import { FC } from "react";

const Home:FC=()=> {
  return (
    <main>
      <Hero/>
      <PlatformOverview />
      <SanityUnlock/>
    </main>
  );
}
export default Home
