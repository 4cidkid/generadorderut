import React from "react";
import "./Rutgen.css";

export default function Rutgen() {
  return (
    <div>
      <h1>RUT GENERATOR</h1>
      <button onClick={generateRandomRut}>Generame!</button>
    </div>
  );
}

function generateRandomRut() {
  let newRut = Math.floor(Math.random() * (40000000 - 1000000 + 1) + 1000000);
  if (validateRandomRut(newRut) == false) {
    generateRandomRut();
  } else {
    return elRut;
  }
}

function validateRandomRut(rut) {
  let rutToValidate = rut;
  let reverseRut = [];
  rutToValidate = rutToValidate.toString();
  rutToValidate = rutToValidate.split("");
  for (let i = rutToValidate.length - 1; i >= 0; i--) {
    reverseRut.push(rutToValidate[i]);
  }
  let multipliedRut = [];
  let j = 2;
  let lastIndex = reverseRut.lastIndexOf(reverseRut[reverseRut.length - 1]);
  for (i of reverseRut) {
    if (lastIndex + 1 == reverseRut.lastIndexOf(i)) {
      break;
    }
    for (j; j <= 7; j++) {
      multipliedRut.push(i * j);
      if (j == 7) {
        j = 2;
      } else {
        j = j + 1;
      }
      break;
    }
  }
  let sumateRut = 0
  for(let i=0;i<multipliedRut.length;i++){
    sumateRut += multipliedRut[i]
  }
  let newSumateRut = Math.floor(sumateRut/11)
  newSumateRut = newSumateRut*11
  sumateRut = sumateRut - newSumateRut;
  if(sumateRut<0){
    sumateRut = sumateRut*-1
  }
  let finalResult = 11-sumateRut
  if(finalResult == 11){
    finalResult = 0
  }
  if(finalResult == 10){
    finalResult = 'k'
  }
  if(finalResult <= 11 || finalResult == 'k'){
    elRut = `${rut}-${finalResult}`
    console.log(elRut)
    return true
  }else{
    return false
  }
}
let elRut = 0;