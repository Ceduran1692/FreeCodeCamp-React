
import './App.css';
import Boton from './components/Boton.js';
import Logo from './components/Logo.js';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import {useState} from 'react';
import {evaluate} from 'mathjs'

function App() {


  const[input, setInput]= useState('');

  const agregarInput= (valor) => {
    setInput(input + valor)
  };

  const calcularResultado= (val) => {
    if(input){  // valores truthy y falsy. ej: string vacio = false, string con al menos un caracter = true
    setInput(evaluate(input))
    }else{
      alert('ingrese una operacion');
    }
  };

  return (
    <div className="App">
      <Logo/>
      <div className='contenedor-calculadora'>
       <Pantalla input= {input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=> setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
