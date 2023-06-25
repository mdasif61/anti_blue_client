import { useQuery } from "react-query";

const useProducts = () => {
    const {data:products=[], refetch}=useQuery({
        queryKey:['glasses'],
        queryFn:async()=>{
            const res=await fetch('https://anti-blue-server.vercel.app/products')
            return res.json()
        }
    })
    return {products, refetch}
};

export default useProducts;