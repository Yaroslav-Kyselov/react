import './App.css'
import MyComponets from "./MyComonents/myComponets.tsx";

function App() {

    return (
        <>
        <MyComponets title={'title1'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit!!!!
        </MyComponets>

        <MyComponets title={'hello2'}>
        </MyComponets>

        <MyComponets title={'hello3'}/>
</>
)
    ;
}

export default App
