import React, {useState} from "react";
import "./Rutgen.css";
import GenerateRandomRut from './function'
export default function Rutgen() {
    const[state,setState] = useState(false)
    function handleClick(){
        setState(!state)
    }
  return (
    <div className="flex flex-col gap-7 items-center mt-20">
      <h1>RUT GENERATOR</h1>
      <button className="myButton" onClick={handleClick} >Generame!</button>
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