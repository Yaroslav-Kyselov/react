import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const RightBranchA = () => {


    const {counterValue, increment} = useContext(MyContext);


    return (
        <>
            Right branchA

            <button onClick={() => {
                increment(counterValue)

            }}>click mi to increment counter in LBA_Component</button>
        </>
    );
};