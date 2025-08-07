import type {IProductsModel} from "../models/ProductsModel.tsx";
import type {IProductsModelDummy} from "../models/ProductsModelDummy.tsx";

const endpointProducts = import.meta.env.VITE_API_COMMENTS + '/products';
const LoadProducts = async (): Promise<IProductsModel[]> => {

    const response: IProductsModelDummy = await fetch(endpointProducts)
        .then(value => value.json())

    return response.products;
}
export default LoadProducts;