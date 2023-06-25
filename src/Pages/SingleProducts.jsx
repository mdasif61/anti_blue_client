import { Link } from "react-router-dom";

const SingleProducts = ({ product }) => {
    const { name, price, description, category, img, _id } = product;
    return (
        <div className="p-5 flex flex-col justify-between hover:scale-95 duration-300 bg-white shadow-lg">
            <img src={img} alt="not found" />
            <h1 className="text-xl font-bold text-gray-600 my-3">{name}</h1>
            <p>{description}</p>
            <div className="flex justify-between items-center my-5">
                <p className="text-lg font-semibold">Price: ${price}</p>
                <h1 className="badge badge-primary">{category}</h1>
            </div>
            <Link to={`/order/${_id}`}>
                <button className="btn btn-block btn-primary">Order Now</button>
            </Link>
        </div>
    );
};

export default SingleProducts;