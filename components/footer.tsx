// import Image from "next/image";
// import React from "react";

// const Footer = () => {
//   return (
//     <div className="flex justify-center items-center h-[301px]  bottom-0 overflow-hidden">
//       <div className="flex flex-col items-top pt-4 px-4 justify-start h-full w-[50%] ">
//         <h1 className="py-2 px-2 font-extrabold text-xl">
//           SATURATE LIGHTING <br /> & PRODUCTION DESIGN STUDIO
//         </h1>
//         <div className="flex flex-row gap-5 py-2 px-2 mt-5 ">
//           <div className="pr-2">
//             <h1 className="font-extrabold text-left text-sm">
//               <span className="text-xl"> SYDNEY </span>
//               <br />
//               AUSTRALIA
//             </h1>
//           </div>
//           <div className="px-2">
//             <h1 className="font-extrabold text-left">
//               BANGKOK <br />
//               THAILAND
//             </h1>
//           </div>
//           <div className="xl:flex justify-center hidden items-center w-[100%] h-[25%]">
//             <Image
//               src="/icons/circle.png"
//               alt="circle image"
//               width={220}
//               height={220}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col items-start justify-start pt-4 px-4 h-full w-[50%] ">
//         <div className="">
//           <div className="pt-2">
//             <div>
//               <h1 className="text-xl font-extrabold">CONTACT US</h1>
//             </div>
//           </div>

//           <div className="py-5">
//             <p className="text-sm font-extrabold">
//               NIRVANA SATHORN <br />
//               KANLAPAPHRUK ROAD <br />
//               BANGKHUNTIAN, CHOMTONG <br />
//               BANGKOK, THAILAND
//             </p>
//           </div>

//           <div className="pb-2">
//             <h3 className="py-2 text-sm font-extrabold">
//               EMAIL: TEAM@SATURATEDESIGNS.COM
//             </h3>
//             <h3 className="py-2 text-sm font-extrabold">
//               FACEBOOK.COM/SATURATEDESIGNS
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start h-auto md:h-[301px] bottom-0 overflow-hidden">
      {/*  Left Side */}
      <div className="relative flex flex-col items-start pt-4 px-4 justify-start w-full md:w-[50%]">
        <h1 className="py-3 px-2 font-extrabold text-xl text-center md:text-left ">
          STAGEGEAR LIGHTING <br /> & PRODUCTION DESIGN STUDIO
        </h1>
        <div className="flex flex-col md:flex-row gap-5  py-2 px-2 mt-5 text-center md:text-left min-w-[100%]">
          <div className="pr-2">
            <h1 className="font-extrabold text-center lg:text-left text-sm">
              <span className="text-xl"> SYDNEY </span>
              <br />
              AUSTRALIA
            </h1>
          </div>

          <div className="px-2">
            <h1 className="font-extrabold text-center lg:text-left">
              BANGKOK <br />
              THAILAND
            </h1>
          </div>
          <div className="absolute right-[100px] top-10 px-2 hidden xl:block  ">
            <Image
              src="/icons/circle.png"
              alt="circle image"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>

      {/* Right Side  */}
      <div className="flex flex-col items-start justify-start pt-4 px-4 w-full md:w-[50%]">
        <div className="">
          <div className="pt-2">
            <div>
              <h1 className="text-xl font-extrabold text-center md:text-left">
                CONTACT US
              </h1>
            </div>
          </div>

          <div className="py-5">
            <p className="text-sm font-extrabold text-center md:text-left">
              NIRVANA SATHORN <br />
              KANLAPAPHRUK ROAD <br />
              BANGKHUNTIAN, CHOMTONG <br />
              BANGKOK, THAILAND
            </p>
          </div>

          <div className="pb-2">
            <h3 className="py-2 text-sm font-extrabold text-center md:text-left">
              EMAIL: TEAM@SATURATEDESIGNS.COM
            </h3>
            <h3 className="py-2 text-sm font-extrabold text-center md:text-left">
              FACEBOOK.COM/SATURATEDESIGNS
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
