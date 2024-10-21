import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleClearClick=()=>{
        let newText = " ";
        setText(newText);
        props.showAlert("Text Cleared", "success")
    }
    const handleOnChange=(event)=>{
    //    console.log("On Change");
       setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text="new text";//wrong way
    // setText("new text");//right way
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      const handleCapital = () =>{
        const arr = text.split(" ")
        for(var i =0;i<arr.length;i++){
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
          props.showAlert("Text Capitalised", "success")
        }
  
        const newtet = arr.join(" ")
        setText(newtet)
      }
      const handleCopy=()=>{
        console.log("I am copy");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard", "success")
      }
      const handleExtraSpaces=()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces handled", "success")
      }
  return (
    <>
    <div  className="container" style={{color:props.mode==='dark'?'white':'#1b3150'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#1b3150'}} id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert toLowercase</button>
    <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2 my-2" onClick={speak}>Speak</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleCapital}>Capitalise</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
         <div className="container my-3" style={{color:props.mode==='dark'?'white':'#1b3150'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length}Minutes to read</p>
            <p>{text.match(/[^.!?]+[.!?]+[\s]*/g)?.length || 0} sentences</p>
            <p>{text.split(/\n\n+/).filter(para => para.trim() !== "").length} paragraphs</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview"}</p>
         </div>
    </>
  )
}
