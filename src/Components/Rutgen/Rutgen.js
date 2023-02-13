import React, {useState} from "react";
import "./Rutgen.css";
import GenerateRandomRut from './function'
export default function Rutgen() {
    const[state,setState] = useState(false)
    function handleClick(){
        setState(!state)
    }
  return (
    <div>
      <h1>RUT GENERATOR</h1>
      <button onClick={handleClick} style={{backgroundColor}}>Generame!</button>
      {state ? <GenerateRandomRut /> : <GenerateRandomRut/>}
      {state ? <GenerateRandomRut /> : <GenerateRandomRut/>}
      {state ? <GenerateRandomRut /> : <GenerateRandomRut/>}
      {state ? <GenerateRandomRut /> : <GenerateRandomRut/>}
      {state ? <GenerateRandomRut /> : <GenerateRandomRut/>}
      {state ? <GenerateRandomRut /> : <GenerateRandomRut/>}
      {state ? <GenerateRandomRut /> : <GenerateRandomRut/>}
      {state ? <GenerateRandomRut /> : <GenerateRandomRut/>}
      {state ? <GenerateRandomRut /> : <GenerateRandomRut/>}
      {state ? <GenerateRandomRut /> : <GenerateRandomRut/>}
      {state ? <GenerateRandomRut /> : <GenerateRandomRut/>}
    </div>
  );
}