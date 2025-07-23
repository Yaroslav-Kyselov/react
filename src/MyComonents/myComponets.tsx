import type {FC, ReactNode} from "react";

type MyComponetPropType = {
    title: string;
    children?: ReactNode
};

const MyComponet:FC<MyComponetPropType>=({title,children})  => {
    return (<div>
    <h2>{title}</h2>
    <p>{children}</p>

    </div>
    );
}

export default MyComponet;