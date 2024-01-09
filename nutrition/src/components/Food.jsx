import React, { useState } from "react";
function Food(props) {
    let {element,index} = props
    let {img,name,cal} = element

    const [input, setinput] = useState(0); 
    const [quantity,setQuantity] = useState(0);

    let quantityHandler = () => {
        setQuantity(input)
    }

    return (
        <>
            <div className="item">

                <div className="bg">
                    <img src={img} />
                    <div className="names">
                        <b>{name}</b>
                        <p>{cal}</p>
                    </div>
                    <div className="right">
                    <input type="number" onChange={(e) => setinput(e.target.value)} value={input} className="num"/>
                    <button onClick={() => quantityHandler()}>+</button>
                    </div>
                </div>
                
                <p className="out">{input} {name} = {cal*quantity} calories</p>
                <button onClick={() => {
                    setinput(0)
                    setQuantity(0);
                }} className="reset">reset</button>

            </div>
        </>
    )
}
export  default Food