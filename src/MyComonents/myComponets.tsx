import type {FC} from "react";

type MyComponetPropType = {text: string;}

const MyComponet:FC<MyComponetPropType>=({text})  => {
    return <div>{text}</div>
}

export default MyComponet;