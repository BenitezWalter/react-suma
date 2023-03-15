import React, { useState } from "react";

function SumaForm() {
  const [result, setResultado] = useState(0);
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const postSuma = async () => {
    const json = await fetch("http://localhost:3000/Suma", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        n1: parseInt(num1),
        n2: parseInt(num2),
      }),
    });

    if (!json.ok) {
      return alert("Error al hacer la peticion");
    }

    const data = await json.json();
    console.log(data);

    console.log(data.resultado);

    setResultado(data.resultado);
  };
  function handleSubmit(e) {
    e.preventDefault();
    postSuma();
  }
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h1>Suma en React y Express</h1>
      <input type="numer" id="num1" className="p-2 input-group-text mt-2" onChange={(e)=> setNum1(e.target.value)}/>
      <input type="numer" id="num2" className="p-2 input-group-text mt-2" onChange={(e)=> setNum2(e.target.value)}/>
      <button className="p-2 btn btn-primary mt-2 color-blue">Sumar</button>
      <h1>Resultado = {result}</h1>
    </form>
  );
}

export default SumaForm;
