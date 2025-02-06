import Hero from "@/section/Hero";
import PlatformOverview from "@/section/PlatformOverview";
import SanityUnlock from "@/section/FutureUnlock";
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
