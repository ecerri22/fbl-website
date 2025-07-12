"use client";

import { usePathname } from "next/navigation";
import PageHeader from "./PageHeader";

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const dynamicTitle = pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");

  return (
    <>
      {!isHome && (
        <PageHeader
          title={dynamicTitle || "Page"}
          backgroundImage="/images/fakulteti-ekonomik-uniel.jpg"
        />
      )}
      <main>{children}</main>
    </>
  );
}
