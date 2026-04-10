import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  countTopAttributes,
  sampleData,
  type Intelligence,
} from "./utils/count-top-attributes.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// expose countTopAttributes to window for testing in console
declare global {
  interface Window {
    countTopAttributes: typeof countTopAttributes;
    sampleData: Intelligence[];
  }
}

window.countTopAttributes = countTopAttributes;
window.sampleData = sampleData;
