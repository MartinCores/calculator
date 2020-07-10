//Ejercicio Calculadora:
//Crear una calculadora que haga operaciones y muestre el resultado (los estilos no son necesarios).
//Requisitos:
//1. Añadir los 10 números.
//2. Soporte para sumar.
//3. Soporte para restar.
//4. Mostrar resultado.
//5. Borrar resultado.
//6. Poner un color específico para el botón de borrar.
//BONUS. Añadir histórico de operaciones.
//BONUS. Combinar operaciones.
//Resultado esperado:
//Una calculadora que funcione :P. Utilizar un único componente para todos los botones (tanto numérico como de operación).
//PISTA 1: La funcionalidad que recibe el componente debemos pasársela por props.
//PISTA 2: Utiliza estados.

import React, { useState } from "react";

import "./App.css";
import { Buttons } from "./components/button.js";
import { Result } from "./components/result.js";

function App() {
  const [result, setResult] = useState("");
  const [leftNum, setLeftNum] = useState("");
  const [rightNum, setRightNum] = useState("");
  const [operator, setOperator] = useState("");

  //funciona "parecido" a addeventlistener
  const handleChange = (event) => {
    result(event.target.onChange);
  };

  function triggerClick(event) {
    const firstOperator = event.target.value;
    const resultCheckOperator = checkOperator(firstOperator);
    console.log(operator);
    console.log(resultCheckOperator);
    if (!operator) {
      setLeftNum(leftNum + firstOperator);
    } else {
      setRightNum(rightNum + firstOperator);
    }

    if (resultCheckOperator === true) {
      setOperator(firstOperator);
      setLeftNum(leftNum);
    }

    if (resultCheckOperator === false) {
      setRightNum(rightNum);
    }

    //switch para interpretar a operación
    switch (operator) {
      case "+":
        setResult(parseInt(leftNum) + parseInt(rightNum));
        break;

      case "-":
        setResult(parseInt(leftNum) - parseInt(rightNum));
        break;

      case "÷":
        setResult(parseInt(leftNum) / parseInt(rightNum));
        break;

      case "*":
        setResult(parseInt(leftNum) * parseInt(rightNum));
        break;

      default:
        setResult(0);
    }
  }

  function checkOperator(operator) {
    if (
      operator === "+" ||
      operator === "-" ||
      operator === "*" ||
      operator === "÷"
    ) {
      return true;
    }
    if (operator === "=") {
      return false;
    }
  }

  function getResult() {
    return result;
  }

  return (
    <>
      <div className="result">
        <Result
          leftNum={leftNum}
          operator={operator}
          rightNum={rightNum}
          printResult={getResult}
        ></Result>
      </div>
      <div className="button-panel">
        <div>
          <Buttons name="AC" triggerClick={triggerClick} />
          <Buttons name="+/-" triggerClick={triggerClick} />
          <Buttons name="%" triggerClick={triggerClick} />
          <Buttons name="÷" triggerClick={triggerClick} />
        </div>
        <div>
          <Buttons name="7" triggerClick={triggerClick} />
          <Buttons name="8" triggerClick={triggerClick} />
          <Buttons name="9" triggerClick={triggerClick} />
          <Buttons name="*" triggerClick={triggerClick} />
        </div>
        <div>
          <Buttons name="4" triggerClick={triggerClick} />
          <Buttons name="5" triggerClick={triggerClick} />
          <Buttons name="6" triggerClick={triggerClick} />
          <Buttons name="-" triggerClick={triggerClick} />
        </div>
        <div>
          <Buttons name="1" triggerClick={triggerClick} />
          <Buttons name="2" triggerClick={triggerClick} />
          <Buttons name="3" triggerClick={triggerClick} />
          <Buttons name="+" triggerClick={triggerClick} />
        </div>
        <div>
          <Buttons name="0" triggerClick={triggerClick} />
          <Buttons name="." triggerClick={triggerClick} />
          <Buttons name="=" triggerClick={triggerClick} />
        </div>
      </div>
    </>
  );
}

export default App;
