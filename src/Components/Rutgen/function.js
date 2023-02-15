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
    let reverseRut = [...rut.toString()].reverse();
    let multipliedRut = [];
    let j = 2;
    let lastIndex = reverseRut.lastIndexOf(reverseRut[reverseRut.length - 1]);
    
    for (let i of reverseRut) {
      if (lastIndex + 1 == reverseRut.lastIndexOf(i)) {
        break;
      }
      multipliedRut.push(i * j);
      j = j == 7 ? 2 : j + 1;
    }
    
    let finalResult = 11 - multipliedRut.reduce((acc, curr) => acc + curr) % 11;
    finalResult = finalResult == 11 ? 0 : finalResult == 10 ? 'k' : finalResult;
    
    if (finalResult <= 11 || finalResult == 'k') {
      elRut = `${rut}-${finalResult}`;
      console.log(elRut);
      return true;
    } else {
      return false;
    }
  }
  
  let elRut = 0;