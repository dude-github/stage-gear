"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const useHideLayout = () => {
  const pathname = usePathname();

  const hideLayoutPatterns = [
    /^\/audiovisual\/[^/]+$/,
    /^\/controlsystem\/[^/]+$/,
    /^\/filmlights\/[^/]+$/,
    /^\/fxlights\/[^/]+$/,
    /^\/movinglight\/[^/]+$/,
    /^\/pixels\/[^/]+$/,
    /^\/sfx\/[^/]+$/,
    /^\/staticlights\/[^/]+$/,
  ];

  return hideLayoutPatterns.some((pattern) => pattern.test(pathname));
};

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const hideLayout = useHideLayout();

  return (
    <>
      {!hideLayout && <Navbar />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
