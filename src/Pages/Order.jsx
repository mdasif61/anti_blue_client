import { useParams } from "react-router-dom";
import Container from "../Container/Container";
import axios from "axios";
import { useEffect, useState } from "react";

const Order = () => {
    const [orders, setOrders] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://anti-blue-server.vercel.app/order/${id}`)
            .then(data => {
                setOrders(data.data)
            })
    }, [id])

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const delivery=e.target.delivery.value;
        const {name,img,price,description,_id, category}=orders
        const info={method:delivery, name,img,price,description, itemId:_id, category }
        axios.post('https://anti-blue-server.vercel.app/delivery', info )
        .then(data=>{
            console.log(data)
        })
    }

    return (
        <div className="my-10">
            <Container>
                <div className="flex">

                    <div className="w-1/2 p-7 text-center rounded-xl bg-white">
                        <img className="rounded-lg" src={orders.img} alt="" />
                        <h1 className="text-xl font-bold my-3 text-gray-600">{orders.name}</h1>
                        <p className="text-lg font-semibold">Price : ${orders.price}</p>
                        <p>{orders.description}</p>
                    </div>

                    <div className="w-1/2">
                        <form onSubmit={handleSubmit} className="w-full h-full p-7 flex items-center justify-center flex-col">
                        <h1 className="text-xl font-bold mb-5">Please Choose Your Delivary System</h1>

                        <div className="flex">
                            <label className="mx-5" htmlFor="">
                            <input type="radio" name="delivery" value='Regular delivery' id="" />
                        <span className="text-blue-500 font-semibold ml-3">Regular delivery</span>
                     </label>
                     <label className="mx-5" htmlFor="">
                     <input type="radio" value='Express delivery' name="delivery" id="" />
                <span className="text-blue-500 font-semibold ml-3">Express delivery</span>
             </label>
            </div>
                <input className="btn btn-block btn-primary my-5" type="submit" value="Confirm" />
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Order;