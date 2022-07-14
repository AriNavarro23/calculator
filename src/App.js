import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import './css/Button.css';
import './css/ButtonClear.css';
import './css/Input.css'; 
import { evaluate } from 'mathjs';  

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  return (
    <div className='App'>
      <div className='calculator-container'>
        <Input input={input}/>
        <div className='row'>
          <Button handleClic={agregarInput}>1</Button>
          <Button handleClic={agregarInput}>2</Button>
          <Button handleClic={agregarInput}>3</Button>
          <Button handleClic={agregarInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClic={agregarInput}>4</Button>
          <Button handleClic={agregarInput}>5</Button>
          <Button handleClic={agregarInput}>6</Button>
          <Button handleClic={agregarInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClic={agregarInput}>7</Button>
          <Button handleClic={agregarInput}>8</Button>
          <Button handleClic={agregarInput}>9</Button>
          <Button handleClic={agregarInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClic={calculateResult}>=</Button>
          <Button handleClic={agregarInput}>0</Button>
          <Button handleClic={agregarInput}>.</Button>
          <Button handleClic={agregarInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear handleClear={() => setInput('')}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;