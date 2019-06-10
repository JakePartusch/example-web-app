import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [hello, setHello] = useState("");
  useEffect(() => {
    fetch("/dev/hello")
      .then(response => response.json())
      .then(data => setHello(data.message));
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {hello}
      </header>
    </div>
  );
}

export default App;
