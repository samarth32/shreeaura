import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const setTitle = (title: string, Component: React.ComponentType) => {
  return function WrappedComponent() {
    document.title = title;
    return <Component />;
  };
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: setTitle("Home", Home),
      },
      {
        path: "about",
        Component: setTitle("About", About),
      },
      {
        path: "services",
        Component: setTitle("Services", Services),
      },
      {
        path: "contact",
        Component: setTitle("Contact", Contact),
      },
    ],
  },
]);