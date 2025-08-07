import './Products.css'
import {useEffect, useState} from "react";
import type {IProductsModel} from "../../models/ProductsModel.tsx";
import LoadComments from "../../servis/api.servis.tsx";
import {Product} from "../product/Comment.tsx";

export const Products = () => {
    const [product, setProduct] = useState<IProductsModel[]>([]);
    useEffect(() => {
        LoadComments().then(value => setProduct(value))
    }, [])
    return (
        <div>
            {
                product.map(product => <Product product={product} key={product.id}/>)
            }

        </div>
    );
}
export default Products;