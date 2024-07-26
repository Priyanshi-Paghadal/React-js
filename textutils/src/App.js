
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';

function App() {
  const [mode , setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* <Navbar title="SparkWeb" about="About Us" /> */}
      <Navbar title="SparkWeb" about="About Us" mode={mode} toggleMode = {toggleMode}/>
      <div className="container my-5">
        <TextForm heading="Information..." mode={mode}/>
      </div>
      <div className="container my-5">
        <About/>
      </div>
    </>
  );
}

export default App;
