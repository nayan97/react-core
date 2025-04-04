import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns]  = useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        setRuns(updatedRuns);
    }

    return (
        <div className="card">
            <h3>Player : BD Batsman</h3>
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}