import  type {FC} from 'react';
import type {IProduct} from "../../models/IProduct.ts";

type MyPropsType={
    product:IProduct
}

const MyProduct:FC<MyPropsType> = ({product}) => {
    return (
        <div>
            <h2>{product.title} {product.price} uah</h2>
            {/*<p>Price: {product.price} $</p>*/}
            <img src={product.image} alt={product.title} style={{width: '200px'}}/>
            <hr/>
        </div>
    );
};

export default MyProduct;