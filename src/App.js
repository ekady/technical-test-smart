import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);

  function handleInputChange(e) {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setInputValue(value);
  }

  function handleSubmit() {
    if (!inputValue) {
      setResult(0);
      return;
    }

    const number = parseInt(inputValue, 10);
    const reversed = parseInt(inputValue.split("").reverse().join(""), 10);
    
    const difference = Math.abs(number - reversed);
    setResult(difference);
  }

  return (
    <div className="App">
      <div>
        Number: <input 
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a number"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="result">Result: {result}</div>
    </div>
  );
}
