import AboutSectionGrid from "@/components/AboutSectionGrid";
import React from "react";

const projects = [
  {
    id: "1",
    imageUrl: "https://picsum.photos/400/900?v=1",
    title: "Project 1",
    description: "Concert",
    link: "",
  },
  {
    id: "2",
    imageUrl: "https://picsum.photos/400?v=2",
    title: "Project 2",
    description: "Festival",
    link: "",
  },
  {
    id: "3",
    imageUrl: "https://picsum.photos/400?v=3",
    title: "Project 3",
    description: "Installation",
  },
  {
    id: "4",
    imageUrl: "https://picsum.photos/400?v=4",
    title: "Project 3",
    description: "Ceremony",
  },
  {
    id: "5",
    imageUrl: "https://picsum.photos/400?v=5",
    title: "Project 3",
    description: "Live Session & Television",
  },
  {
    id: "6",
    imageUrl: "https://picsum.photos/400?v=6",
    title: "Project 3",
    description: "Corporate Event",
  },

  // Add more projects as needed
];
const About = () => {
  return (
    // <main className="h-screen w-full py-20 px-14 flex gap-2">
    //   {/* Section Left for text  */}
    //   <section className="flex flex-col space-y-6 h-[500px] w-[650px] px-2 py-4">
    //     <h1 className="text-3xl font-bold ">About our design studio. </h1>
    //     <p className="text-sm font-bold tracking-wide">
    //       Saturate Designs based in Bangkok and Sydney, Our design career in the
    //       entertainment industry since 2009.
    //     </p>

    //     <p className="text-sm font-bold tracking-wide">
    //       Saturate Designs specialize in lighting designs for festivals, live
    //       music, installation project, films, and theatre designs. From concept
    //       visualization to programming and operation, We are passionate about
    //       sculpting uniqueness to each and every piece of our custom-made
    //       designs.
    //     </p>
    //     <p className="text-sm font-bold tracking-wide">
    //       Contact us today for your next project!
    //     </p>
    //   </section>

    //   {/* Section right for image gird */}
    //   <section className="flex flex-col space-y-6 h-fit w-full mr-64 px-2 py-4">
    //     <AboutSectionGrid projects={projects} />
    //   </section>
    // </main>

    // ! CHAT GPT Code
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
        <AboutSectionGrid projects={projects} />
      </section>
    </main>
  );
};

export default About;
