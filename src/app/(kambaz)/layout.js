import KambazNavigation from "./components/KambazNavigation";

export default function KambazLayout({ children }) {
  return (
    <div className="flex h-screen">
      <KambazNavigation />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
