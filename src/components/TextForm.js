import React, { useState } from "react";

export default function TextForm(props) {
  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent == "Speak") {
        toogle.innerHTML = "Stop"
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML = "Speak"){
            window.speechSynthesis.cancel()
        }
    }
}
  
  const [text, setText] = useState("");

  return (
    <>
        <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="6" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
            Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>
            Convert To Lowercase
        </button>

        </div>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
        <div className="container my-3">
        <h1>Your text Summary</h1>
        <p>
            {" "}
            {text.split(" ").length} words and {text.length} character
        </p>
        <p> {0.008 * text.split(" ").length} Minutes for read word </p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
    </>
    );
}
