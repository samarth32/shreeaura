import { Outlet } from "react-router";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Root() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
