import type {FC} from "react";

type MyComponentPropType = { text: string }

const MyComponet:FC<MyComponentPropType> = ({text}) => {

    return(
    <div>{text}</div>
    );
}

export default MyComponet;