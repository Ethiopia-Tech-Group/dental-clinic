// app/components/ConditionalWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "./User/HomeComponents/Header";
import Footer from "./User/HomeComponents/FooterSection";

export default function ConditionalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // List of routes where header/footer should appear
  const routesWithHeaderFooter = [
    "/",
    "/about",
    "/contact-us",
    "/booking",
    "/service-page",
    "/auth/login",
    "/auth/register",
  ];

  const showHeaderFooter = routesWithHeaderFooter.includes(pathname);

  return (
    <>
      {showHeaderFooter && <Header />}
      <main className="min-h-screen">{children}</main>
      {showHeaderFooter && <Footer />}
    </>
  );
}
