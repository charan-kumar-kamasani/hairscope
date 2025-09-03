import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LabAccessPortal from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <LabAccessPortal />
    </div>
  );
}

export default App;
