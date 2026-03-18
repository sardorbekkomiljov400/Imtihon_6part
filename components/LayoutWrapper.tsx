"use client";

import { usePathname } from "next/navigation";
import Header from "@/modules/header/page";
import Footer from "@/modules/footer/page";
import React from "react";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const hideLayout = pathname.includes("/auth/");

  return (
    <>
      {!hideLayout && <Header />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
};

export default LayoutWrapper;
