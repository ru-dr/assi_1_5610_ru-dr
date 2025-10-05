"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  User,
  LayoutDashboard,
  BookOpen,
  Calendar,
  Inbox,
  Clock,
  Beaker as Labs,
  BrainCircuit as Studio,
  HelpCircle,
} from "lucide-react";

export default function KambazNavigation() {
  const pathname = usePathname();

  const links = [
    {
      name: "Account",
      href: "/account",
      icon: User,
      bgColor: "bg-black",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      bgColor: "bg-white",
      textColor: "text-red-600",
      iconColor: "text-red-600",
    },
    {
      name: "Courses",
      href: "/courses",
      icon: BookOpen,
      bgColor: "bg-white",
      textColor: "text-red-600",
      iconColor: "text-red-600",
    },
    {
      name: "Calendar",
      href: "/calendar",
      icon: Calendar,
      bgColor: "bg-black",
      textColor: "text-white",
      iconColor: "text-red-600",
    },
    {
      name: "Inbox",
      href: "/inbox",
      icon: Inbox,
      bgColor: "bg-black",
      textColor: "text-white",
      iconColor: "text-red-600",
    },
    {
      name: "Labs",
      href: "/labs",
      icon: Labs,
      bgColor: "bg-black",
      textColor: "text-white",
      iconColor: "text-red-600",
    },
    {
      name: "History",
      href: "/history",
      icon: Clock,
      bgColor: "bg-black",
      textColor: "text-white",
      iconColor: "text-red-600",
    },
    {
      name: "Studio",
      href: "/studio",
      icon: Studio,
      bgColor: "bg-black",
      textColor: "text-white",
      iconColor: "text-red-600",
    },
    {
      name: "Help",
      href: "/help",
      icon: HelpCircle,
      bgColor: "bg-black",
      textColor: "text-white",
      iconColor: "text-red-600",
    },
  ];

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className="w-[100px] bg-black flex flex-col items-center py-4 space-y-1 relative z-50">
      <Link
        href="https://northeastern.edu"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4"
      >
        <Image
          src="https://instructure-uploads.s3.amazonaws.com/account_145230000000000001/attachments/949/NU_MonoLVX_RGB_RW.png"
          alt="Northeastern"
          width={64}
          height={64}
          className="w-16 h-16 object-contain"
        />
      </Link>

      {links.map((link) => {
        const Icon = link.icon;
        const active = isActive(link.href);

        const href =
          link.name === "Courses" ? `${link.href}?sidebar=true` : link.href;

        return (
          <Link
            key={link.name}
            href={href}
            className={`
              ${active ? link.bgColor : "bg-black"}
              ${active ? link.textColor : "text-white"}
              w-[90px] py-3 flex flex-col items-center justify-center
              hover:bg-gray-800 transition-colors
              border-l-4 ${active && link.name === "Dashboard" ? "border-transparent" : "border-transparent"}
            `}
          >
            <Icon
              className={`w-6 h-6 mb-1 ${active ? link.iconColor : link.iconColor}`}
            />
            <span className="text-xs text-center">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
