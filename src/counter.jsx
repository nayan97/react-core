export default function counter(){
    const counterStyle = {
        border: '1px solid yellow',
    }

    return (
        <div style={counterStyle}>
            <h3>Count:</h3>
            <button>Add</button>
        </div>
    )
}