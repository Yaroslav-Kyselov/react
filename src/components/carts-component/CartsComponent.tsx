import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {ICart} from "../../models/ICart.ts";
import type {ICartResponseModel} from "../../models/ICartResponsModel.ts";
import {cartService} from "../../services/api.service.ts";
import {CartComponent} from "../cart-component/CartComponent.tsx";


export const CartsComponent = () => {

    const {id} = useParams()

    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {

        if (id) {
            cartService.getAllCarts(id)
                .then(({carts}: ICartResponseModel) => {
                    setCarts(carts);
                });
        }
    }, [id]);

    return (
        <div>
            {
                carts.map((cart: ICart) => <CartComponent key={cart.id} cart={cart}/> )

            }
        </div>
    );
};