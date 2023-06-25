import Container from "../Container/Container";
import useProducts from "../hooks/useProducts";
import SingleProducts from "./SingleProducts";

const Products = () => {
    const { products } = useProducts()
    return (
        <div className="my-10">
            <Container>
                <h1 className="text-xl font-bold text-blue-600">Total Products {products.length}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
                    {
                        products.map((product) => (
                            <SingleProducts
                                key={product._id}
                                product={product}
                            ></SingleProducts>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default Products;