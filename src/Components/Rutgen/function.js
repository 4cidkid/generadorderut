import React from 'react'
export default function GenerateRandomRut() {
    let newRut = Math.floor(Math.random() * (40000000 - 1000000 + 1) + 1000000);
    if (validateRandomRut(newRut) == false) {
      GenerateRandomRut();
    } else {
      return <h2>{elRut}</h2>;
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
    for (let i of reverseRut) {
        console.log(i)
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