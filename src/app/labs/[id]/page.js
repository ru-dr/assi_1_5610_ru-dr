import Link from "next/link";
import Lab1 from "../components/Lab1";
import Lab2 from "../components/Lab2";
import Lab3 from "../components/Lab3";
import Lab4 from "../components/Lab4";
import Lab5 from "../components/Lab5";
import { ArrowLeft } from "lucide-react";

export default async function LabDetail({ params }) {
  const { id } = await params;

  if (id === "lab1") {
    return <Lab1 />;
  } else if (id === "lab2") {
    return <Lab2 />;
  } else if (id === "lab3") {
    return <Lab3 />;
  } else if (id === "lab4") {
    return <Lab4 />;
  } else if (id === "lab5") {
    return <Lab5 />;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100">
      <div className="mb-6">
        <Link
          href="/labs"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex"
        >
          <ArrowLeft className="h-5 w-5" /> Back to Labs
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">
        {id.charAt(0).toUpperCase() + id.slice(1)}
      </h1>
    </div>
  );
}
