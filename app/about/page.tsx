import AboutSectionGrid from "@/components/AboutSectionGrid";
import { aboutPageProjects } from "@/data";
import React from "react";

const About = () => {
  return (
    <main className="h-full w-full py-20 px-4 md:px-14 flex flex-col md:flex-row gap-4">
      {/* Section Left for text */}
      <section className="flex flex-col space-y-6 h-auto w-full md:w-[650px] px-4 py-4">
        <h1 className="text-3xl font-bold">About our design studio.</h1>
        <p className="text-sm font-semibold tracking-wide">
          Saturate Designs based in Bangkok and Sydney, Our design career in the
          entertainment industry since 2009.
        </p>

        <p className="text-sm font-semibold tracking-wide">
          Saturate Designs specialize in lighting designs for festivals, live
          music, installation projects, films, and theatre designs. From concept
          visualization to programming and operation, we are passionate about
          sculpting uniqueness into each and every piece of our custom-made
          designs.
        </p>
        <p className="text-sm font-semibold tracking-wide">
          Contact us today for your next project!
        </p>
      </section>

      {/* Section Right for image grid */}
      <section className="flex flex-col space-y-6 h-fit w-full px-4 py-4 md:w-[calc(100%-650px)]">
        <AboutSectionGrid projects={aboutPageProjects} />
      </section>
    </main>
  );
};

export default About;
