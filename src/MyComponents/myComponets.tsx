import type {FC} from "react";

type MyComponetPropType = {text: string;}

const myComponets:FC<MyComponetPropType>=({text})  => {
    return <div>{text}</div>
}

export default myComponets;