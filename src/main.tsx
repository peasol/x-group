import { createRoot } from "react-dom/client";
import App from "./App";
// @ts-ignore
import "virtual:svg-icons-register";

createRoot(document.getElementById("root")!).render(<App />);
