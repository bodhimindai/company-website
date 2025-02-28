import Hero from "../components/Hero";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/JoinUs";
import RecentWork from "../components/home/InterestAreas";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <WhyChooseUs />
      <RecentWork />
    </div>
  );
}
