import Image from "next/image";
import HeroBanner from "./ui/home/HeroBanner";
import Services from "./ui/home/Services";

export default function Home() {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Services></Services>
    </div>
  );
}
