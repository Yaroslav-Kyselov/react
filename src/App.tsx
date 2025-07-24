import './App.css'
import myComponets from "./MyComponents/myComponets.tsx";

function App() {

    return (
        <>
            <myComponets text={'ldjfjkg'}/>
            {myComponets({text: 'hello1234'})}
        </>
    );
}

export default App
