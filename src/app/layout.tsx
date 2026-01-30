"use client";

import { useState, useEffect } from "react";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoginPopup from "@/components/LoginPopup";

/* ✅ SEO + GEO METADATA */
export const metadata = {
  title: "GL Consultancy | Private College Admission Consultants in Chennai",
  description:
    "GL Consultancy is a trusted private college admission consultancy in Chennai and Tamil Nadu. Compare colleges, explore courses, understand fees, and book free counselling.",
  keywords: [
    "private college admission consultants Chennai",
    "college consultancy Chennai",
    "engineering admissions Chennai",
    "medical admissions Tamil Nadu",
    "education consultants Chennai",
    "private colleges in Chennai",
  ],
  openGraph: {
    title: "Private College Admission Consultants in Chennai | GL Consultancy",
    description:
      "Student-first admission consultancy helping students get into the best private colleges in Chennai and Tamil Nadu.",
    url: "https://glconsultancy.com",
    siteName: "GL Consultancy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GL Consultancy | College Admissions Chennai",
    description:
      "Confused about private college admissions in Chennai? Get expert counselling for free.",
  },
  alternates: {
    canonical: "https://glconsultancy.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [userInfo, setUserInfo] = useState<{
    name: string;
    phone: string;
  } | null>(null);

  /* Show popup on initial visit */
  useEffect(() => {
    const storedUserInfo = sessionStorage.getItem("userInfo");

    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
      return;
    }

    const timer = setTimeout(() => {
      setShowLoginPopup(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleLoginSubmit = (name: string, phone: string) => {
    const userData = { name, phone };
    setUserInfo(userData);
    sessionStorage.setItem("userInfo", JSON.stringify(userData));
    setShowLoginPopup(false);
  };

  const handleLoginClose = () => {
    setShowLoginPopup(false);
  };

  return (
    <html lang="en">
      <body className="bg-[#faf8f3] text-[#1e2749] antialiased">
        <Navbar />

        <main className="pt-20">{children}</main>

        <Footer />
        <WhatsAppButton />

        <LoginPopup
          isOpen={showLoginPopup}
          onClose={handleLoginClose}
          onSubmit={handleLoginSubmit}
        />
      </body>
    </html>
  );
}
