import HomeCard from "@/components/HomeCard";
import HomeSlider from "@/components/HomeSlider";

export default function Home() {
  return (
    <main className="h-full w-full gap-3">
      <section className="hidden md:block w-full my-2">
        <HomeSlider />
      </section>
      <section className="my-2 overflow-hidden">
        {/* Added overflow-hidden here */}
        <HomeCard />
      </section>
    </main>
  );
}
