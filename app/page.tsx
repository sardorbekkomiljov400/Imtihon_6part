import Booking from "@/modules/bookl/page";
import Gallery from "@/modules/navoste/page";
import Hero from "@/modules/Hero/page";
import Info from "@/modules/contenti/page";
import Popular from "@/modules/bluda/page";

export default function Home() {
  return (
   <div>
      <Hero/>
      <Popular/>
      <Booking/>
      <Info/>
      <Gallery/>
   </div>
  );
}
