"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface FType {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<FType>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_5ak2pul",
        "template_xad3hjt",
        {
          from_name: form.name,
          to_name: "Sagar",
          from_email: form.email,
          to_email: "office.sagarborkade@gmail.com",
          //  TODO Add Subject
          message: form.message,
        },
        "eqPeaVP3V3ctuwccA"
      );
      setIsLoading(false);

      alert("Your Message has been sent!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      alert("Something went wrong!!!");
    }
  };

  return (
    // <main className="flex flex-1 justify-center items-center mt-32 h-[530px] ">
    //   <div className="flex flex-col lg:flex-row h-[600px] w-[1080px]  ">
    //     {/* left side */}
    //     <section className="h-[100%] w-1/2 p-2">
    //       <div className="flex flex-col gap-8 py-4 px-6">
    //         <h1 className="text-2xl font-extrabold antialiased">CONTACT US</h1>

    //         <p className="text-sm font-extrabold tracking-wider">
    //           Nirvana sathorn, Kullapapruek Road <br />
    //           Bang Khun Thian, ChomThong <br />
    //           Bangkok Thailand
    //         </p>

    //         <p className="text-sm font-extrabold">
    //           E : team@saturatedesigns.com
    //         </p>

    //         {/* Social logos  */}
    //         <div className="flex space-x-4 items-center mt-4 md:mt-0">
    //           <Link href="/facebook.com">
    //             <Image
    //               src="/icons/facebook.png"
    //               alt="facebook"
    //               height={40}
    //               width={40}
    //             />
    //           </Link>
    //           <Link href="/instagram.com">
    //             <Image
    //               src="/icons/instagram.png"
    //               alt="instagram"
    //               height={40}
    //               width={40}
    //             />
    //           </Link>
    //           <Link href="/youtube.com">
    //             <Image
    //               src="/icons/youtube.png"
    //               alt="youtube"
    //               height={40}
    //               width={40}
    //             />
    //           </Link>
    //         </div>
    //       </div>
    //     </section>

    //     {/* right side  */}
    //     <section className="h-[100%] w-1/2 p-2 text-black" id="contact">
    //       <div className="flex flex-col gap-8 py-4 px-6 ">
    //         <div className="">
    //           <form
    //             ref={formRef}
    //             onSubmit={handleSubmit}
    //             className=" flex flex-col space-y-6"
    //           >
    //             <div className="flex justify-start items-center gap-1">
    //               <label className="">
    //                 {/* <span className="field-label">Full Name</span> */}
    //                 <Input
    //                   type="text"
    //                   name="name"
    //                   value={form.name}
    //                   onChange={handleChange}
    //                   required
    //                   className="w-[235px] text-white"
    //                   placeholder="Name *"
    //                 />
    //               </label>
    //               <label className="">
    //                 {/* <span className="field-label">Email</span> */}
    //                 <Input
    //                   type="email"
    //                   name="email"
    //                   value={form.email}
    //                   onChange={handleChange}
    //                   required
    //                   className="w-[235px] text-white"
    //                   placeholder="Email *"
    //                 />
    //               </label>
    //             </div>
    //             <label className="">
    //               {/* <span className="field-label">Email</span> */}
    //               <Input
    //                 type="text"
    //                 name="subject"
    //                 value={form.subject}
    //                 onChange={handleChange}
    //                 required
    //                 className="text-white"
    //                 placeholder="Subject"
    //               />
    //             </label>
    //             <label className="">
    //               {/* <span className="field-label">Your Message</span> */}
    //               <Textarea
    //                 rows={5}
    //                 name="message"
    //                 value={form.message}
    //                 onChange={handleChange}
    //                 required
    //                 className="text-white"
    //                 placeholder="Share your thoughts or inquiries..."
    //               />
    //             </label>
    //             <Button
    //               // variant={"secondary"}
    //               className=""
    //               type="submit"
    //               disabled={isLoading}
    //             >
    //               {isLoading ? "Sending..." : "Send Message"}
    //               <ArrowUpCircleIcon />
    //             </Button>
    //           </form>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </main>

    // Chat GPT Code ///////
    <main className="flex flex-1 justify-center items-center mt-32 h-auto sm:h-[530px]">
      <div className="flex flex-col sm:flex-row h-auto sm:h-[600px] w-full sm:w-[1080px]">
        {/* left side */}
        <section className="h-auto sm:h-full sm:w-1/2 p-4">
          <div className="flex flex-col gap-8 py-4 px-6">
            <h1 className="text-2xl font-extrabold antialiased">CONTACT US</h1>

            <p className="text-sm font-extrabold tracking-wider">
              Nirvana sathorn, Kullapapruek Road <br />
              Bang Khun Thian, ChomThong <br />
              Bangkok Thailand
            </p>

            <p className="text-sm font-extrabold">
              E : team@saturatedesigns.com
            </p>

            {/* Social logos */}
            <div className="flex space-x-4 items-center mt-4 md:mt-0">
              <Link href="/facebook.com">
                <Image
                  src="/icons/facebook.png"
                  alt="facebook"
                  height={40}
                  width={40}
                />
              </Link>
              <Link href="/instagram.com">
                <Image
                  src="/icons/instagram.png"
                  alt="instagram"
                  height={40}
                  width={40}
                />
              </Link>
              <Link href="/youtube.com">
                <Image
                  src="/icons/youtube.png"
                  alt="youtube"
                  height={40}
                  width={40}
                />
              </Link>
            </div>
          </div>
        </section>

        {/* right side */}
        <section
          className="h-auto sm:h-full sm:w-1/2 p-4 text-black"
          id="contact"
        >
          <div className="flex flex-col gap-8 py-4 px-6">
            <div className="">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col space-y-6"
              >
                <div className="flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-1">
                  <label className="w-full sm:w-[235px]">
                    <Input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full text-white p-2 rounded-md"
                      placeholder="Name *"
                    />
                  </label>
                  <label className="w-full sm:w-[235px]">
                    <Input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full text-white p-2 rounded-md"
                      placeholder="Email *"
                    />
                  </label>
                </div>
                <label className="w-full">
                  <Input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full text-white p-2 rounded-md"
                    placeholder="Subject"
                  />
                </label>
                <label className="w-full">
                  <Textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full text-white p-2 rounded-md"
                    placeholder="Share your thoughts or inquiries..."
                  />
                </label>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto p-2 rounded-md "
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  <ArrowUpCircleIcon />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
