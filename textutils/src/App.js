
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";

function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled" , "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success");
    }
  }
  return (
    <>
      <Navbar title="SparkWeb" about="About Us" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <TextForm heading="Information..." mode={mode} showAlert={showAlert}/>
      </div>
      <div className="container my-5">
        <About/>
      </div>
    </>
  );
}

export default App;
