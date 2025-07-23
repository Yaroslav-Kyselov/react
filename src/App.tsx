import './App.css'
import {products} from "./data/ProductsList.ts";
import type {IProduct} from "./models/IProduct.ts";


function App() {


  return (
    <>
      {
      products.map((product:IProduct, index:number) => (
      <div>
        <h2>{product.title}</h2>
        <p>Price: {product.price} $</p>
        <img src={product.image} alt={product.title} style={{width: '200px'}}/>
        <hr/>


      </div>))
      }
      </>
  );
}

export default App
