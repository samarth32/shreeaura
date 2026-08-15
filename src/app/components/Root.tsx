import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SITE_URL = "https://www.shreeaura.com";

const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "ShreeAura | Home",
    description:
      "Custom software, web, and mobile app development for businesses in Ahmedabad and beyond — from ShreeAura Trade and Solutions LLP.",
  },
  "/about": {
    title: "ShreeAura | About",
    description:
      "Meet the founders behind ShreeAura Trade and Solutions LLP — a founder-led software development company based in Ahmedabad, Gujarat, built on a passion for technology and client success.",
  },
  "/services": {
    title: "ShreeAura | Services",
    description:
      "Custom software development, web development, mobile apps, and UI/UX design — explore ShreeAura's full range of IT services for businesses in Ahmedabad and beyond.",
  },
  "/contact": {
    title: "ShreeAura | Contact",
    description:
      "Get in touch with ShreeAura in Science City, Ahmedabad, Gujarat for custom software, web, and mobile app development. Let's start your project today.",
  },
};

const OG_IMAGE = `${SITE_URL}/logo.png`;

function setMetaContent(selector: string, content: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute("content", content);
}

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const path = location.pathname;
    const meta = PAGE_META[path] ?? {
      title: "ShreeAura | Official Website",
      description: PAGE_META["/"].description,
    };
    const canonicalUrl = `${SITE_URL}${path === "/" ? "/" : path}`;

    document.title = meta.title;
    setMetaContent('meta[name="description"]', meta.description);
    setMetaContent('meta[property="og:title"]', meta.title);
    setMetaContent('meta[property="og:description"]', meta.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[property="og:image"]', OG_IMAGE);
    setMetaContent('meta[property="twitter:title"]', meta.title);
    setMetaContent('meta[property="twitter:description"]', meta.description);
    setMetaContent('meta[property="twitter:url"]', canonicalUrl);
    setMetaContent('meta[property="twitter:image"]', OG_IMAGE);

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);
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
