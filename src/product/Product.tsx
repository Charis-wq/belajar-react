import type { JSX } from "react";


export default function Product({product}: any): JSX.Element {
return(
    <div>
        <h2>{product.id} : {product.name}</h2>
        <p>Harga: {product.price}</p>
    </div>
)

}