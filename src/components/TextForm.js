import React, { useState } from "react";

export default function Textform(props) {

  //functions to handle button click
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if(text.length===0){
      props.showAlert("Please Enter any text!","warning")
    }else{
      props.showAlert("Text converted to uppercase","success")
      }
  };

  // function to convert text into
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if(text.length===0){
      props.showAlert("Please Enter any text!","warning")
    }else{
      props.showAlert("Text converted to lowercase","success")
      }
  };

  // function to clear textarea text
  const clearText = () => {
    setText('');
    if(text.length===0){
      props.showAlert("Please Enter any text!","warning")
    }else{
      props.showAlert("Text cleared successfully!","success")
      }
  };


  // function to handle textarea value change
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // for copying text from textarea
  const handleCopy=()=>{
    let textValue = document.getElementById("myBox")
    textValue.select()
    navigator.clipboard.writeText(textValue.value)
    if(text.length===0){
      props.showAlert("Please Enter any text!","warning")
    }else{
      props.showAlert("Text copied succesfully!","success")
    }
  }

  // using state
  const [text, setText] = useState("");

  // word count 
  const wordCount = text.split(' ')
  const newWords = wordCount.filter((element)=>{return element.length!==0}).length


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
      <button className="btn btn-primary my-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary my1 mx-3" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary my-1" onClick={handleCopy}>
        Copy to Clipboard
      </button>
      <button className="btn btn-danger mx-3 my-1" onClick={clearText}>
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
