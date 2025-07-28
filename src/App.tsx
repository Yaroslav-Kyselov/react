import './App.css'
import MyComponet from "./component/MyComponet.tsx";

function App() {

    return (
        <>
            <MyComponet text="My Componet1" />
            <MyComponet text="My Componet2" />
            <MyComponet text="My Componet3" />
            {/*{MyComponet({text: 'Hello, World! from MyComponet'})}*/}

        </>
    );
}

export default App
