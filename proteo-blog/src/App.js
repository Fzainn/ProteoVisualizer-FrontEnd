///import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import React, { useRef, useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";
import h337 from "heatmap.js";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home />
      </div>
      <form action="" style={{margin: "200px", marginTop: "50px", fontWeight: "bold"}}>
        <label for="mgf_file" style={{fontWeight: "bold"}}>File: </label><br/>
        <input type="file" id="mgf_file" style={{backgroundColor: "#FFC4C4"}}/><br/><br/>
        <input type="submit" value="Submit" style={{backgroundColor: "#FFC4C4",borderRadius: "4px", fontSize: "20px"}}/>
      </form>
    </div>
  )}
  <div>
    <HeatMap
    xLabels={PEPMASS - VALUE}
    yLabels={RTINSECONDS - VALUE}
    yLabelWidth={150}
    xLabelsLocation={"top"}
    xLabelsVisibility={xLabelsVisibility}
    data={data}
    cellStyle={(background, value, min, max, data, x, y) => ({
      background: `rgb(127,255,0, ${1 - (max - value) / (max - min)})`,
      fontSize: "12px",
      fontFamily: "Arial",
      color: `rgb(30,0,0)`,
    })}
    cellRender={value => value && `${value}`} />
</div>
  


export default App;
