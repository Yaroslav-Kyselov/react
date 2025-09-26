import {LeftBranchA} from "./LeftBranchA.tsx";
import {useMemo} from "react";

export const LeftBranch = () => {

    const memoX = useMemo(() => {
        for (let i = 0; i < 100; i++) {
            console.log(i);
        }
        return null;
    }, []);

    return (
        <div>
            <p>LeftBranch</p>

            <LeftBranchA/>
        </div>

    );
};