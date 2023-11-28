import React from "react";
import { useState } from "react";
import './App.css'

function App() {
const [weight, setWeight]=useState(0)
const [height, setHeight]=useState(0)
const [bmi, setBmi]=useState('')
const [massage, setMassage]=useState('')

let calbmi=(e)=>{
 e.preventDefault();
  if(weight=== 0 || height===0){
    alert('please enter a valid weight and height')
  }
  else{
    let bmi =(weight/(height*height)*703)
    setBmi(bmi.toFixed(1))
    if(bmi<25){
      setMassage('you are underweight')
    }
    else if(bmi>=25 && bmi<30){
      setMassage('you are a healthy weight')
    }
    else{
      setMassage('you are overweight')
    }
  }
}

let reload=()=>{
  window.location.reload()
}



  return (
    <div className="app">
      <div className="container">
        <h2> BMI Calculator</h2>
        <form onSubmit={calbmi}>
          <div>
            <label> Weight (ibs)</label>
            <input type="text" placeholder="enter your weight" value={weight} 
            onChange={(e)=> setWeight(e.target.value)}/>

          </div>
          <div>
            <label> Height (in)</label>
            <input type="text" placeholder="enter your height" value={height}
             onChange={(event)=> setHeight(event.target.value)} />

          </div>
          <div>
            <button className="btn" type="submit"> submit</button>
            <button className="btn btn-outline" type="submit" onClick={reload}>reload</button>
          </div>
          <div className="center">
            <h3>Your BMI : {bmi}</h3>
            <p>{massage}</p>

          </div>
        </form>
      </div>
    </div>
  )
}
export default App;
