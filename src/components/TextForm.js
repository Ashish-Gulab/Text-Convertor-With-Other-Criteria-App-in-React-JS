import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Upper Case was clicked ");
        let newText=text.toUpperCase();
        setText(newText);
    };

    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    };

    const handleCopy=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    };

    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
    };

    const handleClearClick=()=>{
        let newText="";
        setText(newText);
    };

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    };

  const[text,setText]= useState('');
//   setText("new text");
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Up</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Low</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
