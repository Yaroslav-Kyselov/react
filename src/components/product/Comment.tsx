import type {FC} from "react";
import type {IProductsModel} from "../../models/ProductsModel.tsx";


export const Product: FC<{ product: IProductsModel }> = ({product: {title, id, description, category, price}}) => {


    return (
        <div>
            <h3>Product #{id} for Price #{price}</h3>
            <p><strong>Name:</strong> {title}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Description:</strong> {description}</p>
        </div>
    );
}
// export default Product;