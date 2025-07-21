import './App.css'
import MyComponets from "./MyComonents/myComponets.tsx";

function App() {

  return (
    <>
        <MyComponets text={"Hello 1"}/>
        <MyComponets text={"Hello 2"}/>
        <MyComponets text={"Hello 3"}/>
        <MyComponets text={"Hello 4"}/>
        {/*{MyComponets({text:'Hello 2'})}*/}
    </>
  );
}

export default App
