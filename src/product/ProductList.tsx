import { useEffect,  useState } from "react";
import Product from "./Product";

type ProductType = {
    id: number;
    name: string;
    price: number;
};

export default function ProductList(){
    const [products, setProducts] = useState<ProductType[]>([]);
    const [load, setLoad] = useState(false);

    function handleClick(){
        setLoad(true);
    }

    useEffect(() => {
        console.log("Call with effect [");
    }, []);

    useEffect(() => {

        async function fetchProduct(){
            const res = await fetch("/Products.json");
            const data = await res.json();
            setProducts(data);
        }
        if(load){
            fetchProduct();
           
            
        }

        return () => {
            console.log("Product List Component unmmounted");
        }
    }, [load]);


    return(
        <>
        <h1>Product List</h1>
        <button onClick={handleClick}>Load Product</button>
        {products.map((product) =>(
            <Product product={product} key={product.id} />
        ) )}
        </>
    )
}