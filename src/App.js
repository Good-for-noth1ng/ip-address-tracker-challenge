import React from "react";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import InfoBox from "./components/InfoBox";

const BodyContainerStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    font-family: 'Rubik', sans-serif;
  }
  html {
    font-size: 100%;
    box-sizing: border-box;
  }
`

function App() {
  
  return (
    <div className="App">
      <BodyContainerStyle/>
      <Header />
      <InfoBox />
    </div>
  );
}

export default App;
