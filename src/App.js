import "./App.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import States from "./components/states";
import Mains from "./components/conditional/Main";
import Keys from "./components/keys/keys";
import { InputGroup } from "react-bootstrap";

let num=0
function App() {



  const [count, setCount] = useState(0);
 
  const [inputValue, setInputValue] = useState(1);

  const incriment = () => {
    setCount(count +1*inputValue);
  };
  const decriment = () => {
    setCount(count - 1*inputValue);
  };


  const handleInputChange = (event) => {
    setInputValue(parseInt(event.target.value));
  };

  function resetPrice(){
    setInputValue(1)
   setCount(0)
    
   
}


  return (
    <div className="align-content-center justify-content-center text-center  w-100" style={{height:"100vh"}}>
    {/* <Keys/> */}

      <Container className="mt-5 h-50 border rounded-4 shadow w-50 bg-white text-bg-light align-content-center justify-content-center text-center">
        <h1 >React Counter App </h1>
        <h2 id="count">{count}</h2>
        <Button className="m-3 bg-success border-0" onClick={incriment}>
          +
        </Button>
        <Button className="bg-danger border-0" onClick={decriment}> 
          -
        </Button>
        <Button onClick={resetPrice} className="m-3 border-0" > 
          Reset
        </Button>
        <br/>
        <p>step : <input id='input' type="number" value={inputValue} onChange={handleInputChange} ></input></p>

        
      </Container>
    </div>
  );
}

export default App;
