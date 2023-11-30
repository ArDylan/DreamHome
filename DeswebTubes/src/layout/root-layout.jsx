import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard"; // Impor komponen Dashboard

const navlink = [
  {
    title: "BELI",
    path: "/beli",
  },
  {
    title: "SEWA",
    path: "/sewa",
  },
  {
    title: "KPR & TAKE OVER",
    path: "/kprtakeover",
  },
  {
    title: "ESTIMASI PROPERTI",
    path: "/estimasi",
  },
  {
    title: "TITIP JUAL/SEWA",
    path: "/titip-jual-sewa",
  },
  {
    title: "JASA",
    path: "/jasa",
  },
];

export default function RootLayout() {
  return (
    <>
      <Navbar navlinks={navlink} />

      {/* Tambahkan komponen Dashboard di sini */}
      <Dashboard />

      <footer className="py-4 w-screen flex justify-center items-center">
        {/* Konten footer */}
      </footer>
    </>
  );
}
