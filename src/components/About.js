
import React, {useState} from 'react'
export default function About(props) {
    // const[myStyle, setMyStyle]=useState({
    //     color:'black ',
    //     backgroundColor: 'white'
    // })
    let myStyle={
      color:props.mode==='dark'?'white':'#042743',
      backgroundColor: props.mode==='dark'?'rgb(36 74 104':'white',
    }
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>About us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyse Your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       Word Master gives you a way to utilize your text quickly and efficiently. Be it word count, 
          ccharacter count or calculte time to read it.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       Word Master is a free character counter tool thet provides instant charcter count and word count statitics for a given text. Word Master reports
           the number of words and characters. This is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       This word counter software works in any web browsers such as chrome, Firefox, Internet Explorer,
        safari, Opera. It suits to count charcter in facebook, blog ,books, excel document, pdf document,esaays, etc.
      </div> 
     
    </div>
</div>
</div>
    </div>
  )
}
