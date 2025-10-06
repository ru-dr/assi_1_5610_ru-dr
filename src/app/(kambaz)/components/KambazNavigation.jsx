"use client";

import { useState } from "react";
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
  Menu,
  X,
} from "lucide-react";

export default function KambazNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
      activeBgColor: "bg-white",
    },
    {
      name: "Courses",
      href: "/courses",
      icon: BookOpen,
      bgColor: "bg-black",
      textColor: "text-white",
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
    <>
      {/* Mobile Hamburger Menu Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-black flex items-center justify-between px-4 z-50">
        <Link href="https://northeastern.edu" target="_blank" rel="noopener noreferrer">
          <Image
            src="https://instructure-uploads.s3.amazonaws.com/account_145230000000000001/attachments/949/NU_MonoLVX_RGB_RW.png"
            alt="Northeastern"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 hover:bg-gray-800 rounded transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 top-14"
          onClick={() => setIsOpen(false)}
          onTouchStart={() => setIsOpen(false)}
          style={{ pointerEvents: 'auto' }}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <nav
        className={`md:hidden fixed top-14 left-0 bottom-0 w-64 bg-black transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col py-4">
          {links.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  ${active ? "bg-white" : "bg-black"}
                  ${active ? "text-red-600" : "text-white"}
                  px-6 py-4 flex items-center space-x-4
                  hover:bg-gray-800 transition-colors
                  ${active ? "border-l-4 border-red-600" : "border-l-4 border-transparent"}
                `}
              >
                <Icon
                  className={`w-6 h-6 ${active ? "text-red-600" : link.iconColor}`}
                />
                <span className="text-sm font-medium">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop Sidebar (hidden on mobile) */}
      <nav className="hidden md:flex w-[100px] bg-black flex-col items-center py-4 space-y-1 relative z-50">
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

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`
              ${active ? "bg-white" : "bg-black"}
              ${active ? "text-red-600" : "text-white"}
              w-[90px] py-3 flex flex-col items-center justify-center
              hover:bg-gray-800 transition-colors
              ${active ? "border-l-4 border-white" : "border-l-4 border-transparent"}
            `}
          >
            <Icon
              className={`w-6 h-6 mb-1 ${active ? "text-red-600" : link.iconColor}`}
            />
            <span className="text-xs text-center">{link.name}</span>
          </Link>
        );
      })}
      </nav>
    </>
  );
}
