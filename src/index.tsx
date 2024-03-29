
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import "./index.css";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App title="We are running react-typescript-seed project."/>
  </StrictMode>
);

