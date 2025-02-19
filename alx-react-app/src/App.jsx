import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar />
      <Navbar />

      <div className="content">
        <h1>App component</h1>
      </div>
    </div>
  );

  return;
}

export default App;
