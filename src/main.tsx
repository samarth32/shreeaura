  // import { createRoot } from "react-dom/client";
  // import App from "./app/App.tsx";
  // import "./styles/index.css";

  // createRoot(document.getElementById("root")!).render(<App />); 

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";   // or "./app/App" depending on your project
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  {/*<BrowserRouter> */}
    <App />
  {/* </BrowserRouter> */}
);
