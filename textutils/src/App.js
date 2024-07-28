
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [color , setColor] = useState('black');
  const [backgroundColor , setBackgroundColor] = useState('white');
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
      document.title = 'Textutils - Dark Mode';
      // setInterval(()=>{
      //   document.title='Textutils are Amazing';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install Textutils Now';
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success");
      document.title = 'Textutils - Light Mode';
    }
  }
  return (
    <>
      <Navbar title="SparkWeb" about="About Us" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
      <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
        <TextForm heading="Information..." mode={mode} showAlert={showAlert}/>
      </div>
      <div className="container my-5">
        <About/>
      </div>
    </>
  );
}

export default App;
