import { useState } from "react"

export default function counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () =>{
     const newCount = count + 1;
     setCount(newCount);
     
    }
    const counterStyle = {
        border: '1px solid yellow',
    }

    return (
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}