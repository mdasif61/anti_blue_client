import { useQuery } from "react-query";

const useProducts = () => {
    const {data:products=[], refetch}=useQuery({
        queryKey:['glasses'],
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/products')
            return res.json()
        }
    })
    return {products, refetch}
};

export default useProducts;