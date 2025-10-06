import KambazNavigation from "./components/KambazNavigation";

export default function KambazLayout({ children }) {
  return (
    <div className="flex h-screen">
      <KambazNavigation />
      <main className="flex-1 overflow-auto pt-14 md:pt-0">{children}</main>
    </div>
  );
}
