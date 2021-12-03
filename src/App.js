import React,{useState} from "react";
import About from "./components/About";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  // function for showing alerts
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  // method for dark mode
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.background = "#393945"
      showAlert("Dark mode has been enabled","success")
    }else{
      setMode("light")
      document.body.style.background = "white"
      showAlert("Light mode has been enabled","success")
    }
  }

  return (
    <BrowserRouter> 
    <Navbar title="Textutils" alert={alert} item="About" mode={mode} toggleMode={toggleMode}/>
    <Alerts alert={alert}/>
    <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode}/>} />
        <Route path="/About" element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
