import React from "react";
import logoWhite from "./assets/images/logo-white.png";
import underConstruction from "./assets/images/under-construction.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoWhite} className="mx-auto  h-[40vmin]" alt="logo" />
        {/* <img
          src={underConstruction}
          className="object-cover  h-[100%] w-[100%]"
          alt="logo"
        /> */}
        <p>Website currently under construction.</p>
        <a
          className="App-link"
          href="https://twitter.com/NEXTCHAPTERTEC"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit our socials
        </a>
      </header>
    </div>
  );
}

export default App;
