import { useEffect } from "react";
import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const withSEO = (title: string, description: string, Component: React.ComponentType) => {
  return function WrappedComponent(props: any) {
    useEffect(() => {
      // Set Document Title
      document.title = title;
      
      // Helper function to set or create meta tags
      const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
        let metaTag = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
        if (!metaTag) {
          metaTag = document.createElement('meta');
          metaTag.setAttribute(attributeName, attributeValue);
          document.head.appendChild(metaTag);
        }
        metaTag.setAttribute('content', content);
      };

      // Set Meta Description
      setMetaTag('name', 'description', description);
      
      // Set Open Graph Title and Description
      setMetaTag('property', 'og:title', title);
      setMetaTag('property', 'og:description', description);
      
      // Set Twitter Title and Description
      setMetaTag('name', 'twitter:title', title);
      setMetaTag('name', 'twitter:description', description);
      
    }, [title, description]);

    return <Component {...props} />;
  };
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: withSEO(
          "Home | ShreeAura", 
          "Welcome to ShreeAura. We provide premium corporate solutions and consulting services tailored for modern businesses.", 
          Home
        ),
      },
      {
        path: "about",
        Component: withSEO(
          "About Us | ShreeAura", 
          "Learn about ShreeAura's mission, team, and our commitment to providing top-notch corporate services.", 
          About
        ),
      },
      {
        path: "services",
        Component: withSEO(
          "Our Services | ShreeAura", 
          "Explore the wide variety of premium corporate services offered by ShreeAura, designed for scalable business growth.", 
          Services
        ),
      },
      {
        path: "contact",
        Component: withSEO(
          "Contact Us | ShreeAura", 
          "Get in touch with ShreeAura for all your corporate solution inquiries. We are here to help.", 
          Contact
        ),
      },
    ],
  },
]);