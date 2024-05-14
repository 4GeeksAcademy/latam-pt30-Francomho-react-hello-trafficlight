import React, {useState} from 'react'

//inmport usesttae

export function TraficLight(props){
    const [ color, setColor] = useState("");
    const lightOn = (event) => {
        setColor(prev => {
                return !prev
        })
    }

    return (
        <div id="container">
            <div 
            className={`redLight ${color == "redLight" ? "shadowLight" : ""}`}
            onClick={()=>{
                setColor(prev => {
                     if (prev == "redLight"){
                        return ""
                     }else {
                        return "redLight"
                     }
                })
            } }
        
            ></div>
            <div 
            className={`yellowLight ${color =="yellowLight" ? "shadowLight" : ""}`}
            onClick={() => {
                    setColor(prev => {
                        return prev == "yellowLight" ? "" : "yellowLight"
                    })
            }}
            
            ></div>
            <div 
            className={`greenLight ${color == "greenLight" ? "shadowLight" : ""}`}
            onClick={() => {
                    setColor(prev => {
                        return prev == "greenLight" ? "" : "greenLight"
                    })
            }}
            ></div>
        </div>

    )
   
};