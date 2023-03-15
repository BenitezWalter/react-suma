import React, { useState } from "react";

function SumaFormLocal() {
  const [result, setResultado] = useState(0);
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  
  function handleSubmit(e) {
    e.preventDefault();
    setResultado(parseInt(num1)+parseInt(num2))
  }
  
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h1>Suma en React sin servidor</h1>
      <input type="numer" id="num1" className="p-2 input-group-text mt-2" onChange={(e)=> setNum1(e.target.value)}/>
      <input type="numer" id="num2" className="p-2 input-group-text mt-2" onChange={(e)=> setNum2(e.target.value)}/>
      <button className="p-2 btn btn-primary mt-2 color-blue">Sumar</button>
      <h1>Resultado = {result}</h1>
    </form>
  );
}

export default SumaFormLocal;
