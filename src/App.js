import './App.css';
import '../src/css/Input.css';
import '../src/css/Button.css';
import '../src/css/ButtonClear.css';
import Input from './components/Input';
import Button from './components/Button';
import ButtonClear from './components/ButtonClear'; 


function App() {
  return (
    <div className="App">
      <div className='calculator-container'>
        <Input />
        <div className='fila'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='fila'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='fila'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='fila'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='fila'>
          <ButtonClear>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;


