import type {FC} from "react";
import type {ICart} from "../../models/ICart.ts";

type Props ={

    cart:ICart
}

export const CartComponent:FC<Props> = ({cart}) => {
    return (
        <div>
            {cart.total}
        </div>
    );
};