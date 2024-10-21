
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
// import { Routes, Route , BrowserRouter} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
   const [alert, setAlert]=useState(null);
   const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
   }
  const toggleMode1 = ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#1b3150';
      showAlert("Dark mode has been enabled", "success")
      document.title='Word Master-Dark Mode'
    //   setInterval(()=>{
    //     document.title='Word Master is Amazing Mode';
    //    },2000);
    //    setInterval(()=>{
    //    document.title='Install Word Now';
    // }, 1500);
    }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled", "success")
    document.title='Word Master-Light Mode'
  }
  }
  // const toggleMode2 = ()=>{
  //   if(mode=== 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor='#1b3150';
  //     showAlert("Dark mode has been enabled", "success")
  //     document.title='Word Master-Dark Mode'
  //   }
  // else{
  //   setMode('light');
  //   document.body.style.backgroundColor='white';
  //   showAlert("Light mode has been enabled", "success")
  //    document.title='Word Master-Light Mode'
  //  }
  // }
  return (
    <>
    {/* <BrowserRouter> */}
    
{/* <Navbar title="FirstApp" aboutText="About First App"/> */}
{/* <Navbar/> */}
<Navbar title="Word Master" mode={mode} toggleMode1={toggleMode1} /*toggleMode2={toggleMode2}*//>
<Alert alert={alert}/>
<div className="container my-3" mode={mode}>
{/* <Routes> */}
          {/* <Route path="/about" element={<About/>}/>
          </Routes> 
          <Routes> */}
          {/* <Route path="/" */}
          {<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>}
        {/* /> */}
        {/* </Routes> */}
       
</div>
{/* </BrowserRouter> */}
    </>

 );
}

export default App; 
