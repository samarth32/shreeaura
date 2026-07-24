import { RouterProvider } from 'react-router';
import { router } from './routes'; 
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

export default function App() {
  return <RouterProvider router={router} />;
} 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
