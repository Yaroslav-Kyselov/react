import type {IProductsModel} from "./ProductsModel.tsx";

export interface IProductsModelDummy {
    products: IProductsModel[];
    skip: number;
    limit: number;
    total: number;
}