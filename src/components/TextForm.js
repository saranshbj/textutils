import React, { useState } from "react";

export default function Textform(props) {

  //functions to handle button click
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase","success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase","success")
  };

  const clearText = () => {
    setText('');
    props.showAlert("Text cleared successfully!","success")
  };


  // function to handle textarea value change
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // using state
  const [text, setText] = useState("");

  // word count 
  const wordCount = text.split(' ')
  const newWords = wordCount.filter(item => item.length !== 0).length

  // for copying text from textarea
  const handleCopy=()=>{
    let text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text copied succesfully!","success")
  }

  return (
    <div className="parent" style={{color: props.mode==='dark'?'white':'black'}}>
    <div className="container">
      <h1 className="text-center my-3">{props.heading}</h1>
      <div className="myBox mb-3">
        <textarea
          className="form-control"
          onChange={handleChange}
          value={text}
          placeholder="Enter text here.."
          id="myBox"
          style={{background: props.mode==='dark'?'#212529':'white',color: props.mode==='dark'?'white':'black'}}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary" onClick={handleCopy}>
        Copy to Clipboard
      </button>
      <button className="btn btn-danger mx-3" onClick={clearText}>
        Clear Text
      </button>

    </div>
    <div className="container my-3 text-break">
      <h2>Your Text Summary</h2>
      <p>{newWords} Words and {text.length} Characters</p>
      <p>{0.008 * newWords} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </div>
  );
}
