import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";

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
    </div>
  );
}

export default App;
