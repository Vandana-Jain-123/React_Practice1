import { useState } from "react"

const Counter=()=>{
//  const [count,setCount]=useState(0)
 
 const [messsage,setMessage]=useState("by")

// const increment=()=>{  
//     setCount(count+1)
//     }

// const decrement=()=>{
//    setCount(count-1)
// }

const clickLeft=()=>{  
    setMessage("hello")
    }

const clickRight=()=>{
   setMessage("By")
}


    return(
        <>
        <h1 style={{color: messsage==="By"? "red" : "green"}}>{messsage}</h1>
        
        <button onClick={clickLeft}>Click Left</button>
         <button onClick={clickRight}>Click Right</button>
        </>
    )
}
 export default Counter