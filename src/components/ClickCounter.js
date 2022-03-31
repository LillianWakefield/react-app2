import React, {useState} from 'react';

export default function ClickCounter () {

const [counter, setCount] = useState(1)
const [stock] = useState(5)
const [cartTotal] = useState(0)

const plusClick = () => {
    if (counter < stock) {
    setCount (counter +1 )
    }
}
const minusClick = () => {
    if (counter >0) {
    setCount (counter -1)
    }
}

    return(

        <>
            <p>Qty: <button onClick={minusClick}> - </button> 
            ({counter})
            <button onClick={plusClick}> + </button></p>
        </>
    )

}