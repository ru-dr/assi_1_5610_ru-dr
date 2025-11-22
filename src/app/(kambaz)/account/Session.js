"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import * as client from "./client";

export default function Session({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    checkSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkSession = async () => {
    try {
      const currentUser = await client.profile();
      setUser(currentUser);
    } catch (err) {
      // User not logged in - that's okay
      setUser(null);
      
      // Redirect to signin if trying to access protected routes
      const protectedRoutes = ["/dashboard", "/courses", "/account/profile"];
      const isProtected = protectedRoutes.some(route => pathname?.startsWith(route));
      
      if (isProtected && pathname !== "/account/signin" && pathname !== "/account/signup") {
        router.push("/account/signin");
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return children;
}
