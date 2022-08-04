import React, { useLayoutEffect } from "react";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import InfoBox from "./components/InfoBox";
import 'mapbox-gl/dist/mapbox-gl.css'; 
import MapContainer from "./components/MapContainer";
import { useDispatch } from "react-redux";
import { fetchInitData } from './redux/dataSlice';

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
  
  const dispatch = useDispatch()
  
  useLayoutEffect(() => {
    dispatch(fetchInitData());
  }, [])

  return (
    <div className="App">
      <BodyContainerStyle/>
      <Header />
      <InfoBox />
      <MapContainer />
    </div>
  );
}

export default App;
