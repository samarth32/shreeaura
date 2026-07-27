import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const path = location.pathname;
    const pathParts = path.split("/").filter(Boolean);
    
    if (path === "/") {
      document.title = "ShreeAura | Home";
    } else if (pathParts.length > 0) {
      const pageName = pathParts[0].charAt(0).toUpperCase() + pathParts[0].slice(1);
      document.title = `ShreeAura | ${pageName}`;
    } else {
      document.title = "ShreeAura | Official Website";
    }
  }, [location.pathname]);

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
