import React, { useState } from "react"

import './App.css';

function App() {
//  Program Range Constants
const MINHEIGHT  =  12
const MAXHEIGHT  =  96
const MINWEIGHT  =   1
const MAXWEIGHT  = 777
const MINOPTIMAL =  18.5
const MINOVER    =  25.0
const MINOBESE   =  30.0

//  Program State Constants
const [height, setHeight] 	    = useState(0)
const [weight, setWeight] 	    = useState(0)
const [bmi, setBmi]       	    = useState('')
const [message, setMessage]     = useState('')

let calculateBMI = (e) => {
	e.preventDefault()

	if ((height < MINHEIGHT) || (height > MAXHEIGHT) ||
	    (weight < MINWEIGHT) || (weight > MAXWEIGHT))
	{
		alert("Please enter a valid height and weight")
		return
	}
	else
	{
    let bmi = (weight / (Math.pow(height, 2)) * 703)
    setBmi(bmi.toFixed(2))

    if (bmi < MINOPTIMAL)
    {
      setMessage("Underweight")
      imgSrc = require("../src/assets/underweight.png")
    }
    else if (bmi < MINOVER)
    {
      setMessage("Optimal weight")
      imgSrc = require("../src/assets/optimalweight.png")
    }
    else if (bmi < MINOBESE)
    {
      setMessage("Overweight")
      imgSrc = require("../src/assets/overweight.png")
    }
    else if (bmi >= MINOBESE)
    {
      setMessage("Obese")
      imgSrc = require("../src/assets/obese.png")
    }
  }
}

  let imgSrc

  if (bmi < 1)
  {
    imgSrc = null
  }
  else if (bmi < MINOPTIMAL)
  {
    imgSrc = require("../src/assets/underweight.png")
  }
  else if (bmi < MINOVER)
  {
    imgSrc = require("../src/assets/optimalweight.png")
  }
  else if (bmi < MINOBESE)
  {
    imgSrc = require("../src/assets/overweight.png")
  }
  else if (bmi >= MINOBESE)
  {
    imgSrc = require("../src/assets/obese.png")
  }

  let reload = (e) => {
    window.location.reload()
  }

  return (
    <div className="App">
		  <div className="container">
			  <h2 className="centered">BMI Calculator</h2>
			    <form onSubmit={calculateBMI}>
			
        <div>					
          <label>Height (inches)</label><br />
					  <input value={height} onChange={(e) => 
              setHeight(e.target.value)} />
				</div>

				<div>
					<label>Weight (pounds)</label><br />
					<input value={weight} onChange={(e) =>
              setWeight(e.target.value)} />
				</div>

				<div class="centered">
					<button className="btn" type="submit">Submit</button><br />
					<button className="btn" type="reset" onClick={reload}>Reset</button>
				</div>
			</form>

			<div className="centered">
				<h3>BMI: {bmi}</h3>
				<p>{message}</p>
			</div>

			<div className="image-container">
				<img src={imgSrc} alt="Person picture" />
			</div>
		</div>
	</div>
  )
}

export default App
