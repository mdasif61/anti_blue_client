const Tab = ({item}) => {
    const {name,img, price,description,category}=item
    return (
        <div className="p-5 bg-white shadow-xl">
            <img src={img} alt="" />
            <h1 className="text-xl font-bold text-gray-600">{name}</h1>
            <div className="flex justify-between my-5">
                <p className="text-lg font-semibold">Price : ${price}</p>
                <h1 className="badge badge-primary">{category}</h1>
            </div>
        </div>
    );
};

export default Tab;