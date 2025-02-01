import Hero from "@/section/Hero";
import PlatformOverview from "@/section/PlatformOverview";
import { FC } from "react";

const Home:FC=()=> {
  return (
    <main>
      <Hero/>
      <PlatformOverview />
    </main>
  );
}
export default Home
