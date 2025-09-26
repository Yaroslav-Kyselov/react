import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const LeftBranchA = () => {

    const {counterValue} = useContext(MyContext);

    return (
        <div>
        left branchA
            <p>counter value={counterValue}</p>
        </div>
    );
};