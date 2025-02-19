import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import Main from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      <Header />;
      <Main />
      <Footer />
    </div>
  );

  return;
}

export default App;
