import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom styles for global elements
const style = document.createElement('style');
style.textContent = `
  html {
    scroll-behavior: smooth;
  }
  
  @keyframes blink {
    from, to { opacity: 1 }
    50% { opacity: 0 }
  }
  
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: #1E293B;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #475569;
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: hsl(156, 100%, 50%);
  }
`;

document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
