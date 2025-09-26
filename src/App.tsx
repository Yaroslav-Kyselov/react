import './App.css'
import {A} from "./componets/A.tsx";
import {B} from "./componets/B.tsx";
import {MyContext} from "./context/MyContextProvider.tsx";
import {useState} from "react";


function App() {

    const [themColor, setThemColor] = useState<string>("light");

    return (
        <div>
            <MyContext.Provider value={{
                theme: themColor,
                changeTheme: (themeValue: string) => {
                    setThemColor(themeValue)
                }
            }}>

                <A/>
                <B/>

            </MyContext.Provider>

        </div>
    );
}

export default App
