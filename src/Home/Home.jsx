import { useEffect, useState } from "react";
import Container from "../Container/Container";
import axios from "axios";
import Tab from "./Tab";

const Home = () => {
    const [style, setStyle] = useState('All delivery')
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/delivery/${style}`)
            .then(data => {
                setProduct(data.data)
            })
    }, [style])

    return (
        <div>
            <Container>
                <div className="flex min-h-screen w-full items-center justify-center flex-col">
                    <div className="flex my-10">
                        <div onClick={() => setStyle('All delivery')} className={`bg-blue-600 text-white cursor-pointer py-3 px-7 ${style == 'All delivery' && 'scale-110 bg-blue-800 rounded-s-full'}`}>
                            <h1>All Delivery</h1>
                        </div>
                        <div onClick={() => setStyle('Regular delivery')} className={`bg-blue-600 text-white cursor-pointer py-3 px-7 ${style == 'Regular delivery' && 'scale-110 bg-blue-800'}`}>
                            <h1>Regular Delivery</h1>
                        </div>
                        <div onClick={() => setStyle('Express delivery')} className={`bg-blue-600 text-white cursor-pointer py-3 px-7 ${style == 'Express delivery' && 'scale-110 bg-blue-800 rounded-e-full'}`}>
                            <h1>Express Delivery</h1>
                        </div>
                    </div>

                    <div className="my-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                        {
                            product.map(item =><Tab
                            key={item._id}
                            item={item}
                            ></Tab>)
                        }
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Home;