import { useEffect,  useState } from "react";
import Product from "./Product";

export default function ProductList(){
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

    function handleClick(){
        setLoad(true);
    }

    useEffect(() => {
        console.log("Call with effect [");
    }, []);

    useEffect(() => {
        if(load){
            console.log("use Effect")
            fetch("./public/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            
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