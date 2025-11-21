"use client";

import KambazNavigation from "./components/KambazNavigation";
import Session from "./account/Session";

export default function KambazLayout({ children }) {
  return (
    <Session>
      <div className="flex h-screen">
        <KambazNavigation />
        <main className="flex-1 overflow-auto pt-14 md:pt-0">{children}</main>
      </div>
    </Session>
  );
}
