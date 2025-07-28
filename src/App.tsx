import './App.css'
import {products} from "./data/ProductsList.ts";
import type {IProduct} from "./models/IProduct.ts";
import MyProduct from "./MyComonents/my-product/MyProduct.tsx";


function App() {


    return (
        <>
            {
                products.map((product: IProduct, index: number) => <MyProduct key={index} product={product}/>
                   )
            }
        </>
    );
}

export default App
