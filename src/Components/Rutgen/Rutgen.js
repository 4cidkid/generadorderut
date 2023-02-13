import React from 'react'
import './Rutgen.css'


export default function Rutgen(){
    return(
        <div>
            <h1>RUT GENERATOR</h1>
            

        </div>
    )
}

function generateRandomRut(){
    let newRut = Math.floor(Math.random()*(40000000-1000000 +1)+1000000)
    
}

function validateRandomRut(RUT){

}