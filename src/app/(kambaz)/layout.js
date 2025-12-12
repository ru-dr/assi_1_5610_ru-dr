"use client";

import KambazNavigation from "./components/KambazNavigation";
import Session from "./account/Session";
import IndeksProvider from "@/provider/indeks-provider";

export default function KambazLayout({ children }) {
  return (
    <Session>
      <IndeksProvider/>
      <div className="flex h-screen">
        <KambazNavigation />
        <main className="flex-1 overflow-auto pt-14 md:pt-0">
          {children}</main>
      </div>
    </Session>
  );
}
