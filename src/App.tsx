import {useState} from "react";

const App = () => {

    let [counter, setCounter] = useState<number>(0);
    console.log('App component rendered');
    return (
        <div>


            <h2>{counter}</h2>
            <button onClick={() => {
                setCounter(counter + 1);

            }}>increment
            </button>
            <button onClick={() => {
                setCounter(--counter);

            }}>decrement
            </button>


        </div>
    );
}

export default App
