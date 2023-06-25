import { NavLink } from "react-router-dom";
import Container from "../Container/Container";

const Navbar = () => {

    const navLinks=[
        {
            path:'/',
            menu:'Home'
        },
        {
            path:'/products',
            menu:'Products'
        }
    ]

    return (
        <div className="bg-blue-700 py-5 sticky top-0 z-50">
            <Container>
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold text-white">Anti<span className="text-2xl text-blue-300">Blue</span></h1>
                    <ul className="flex">
                       {
                        navLinks.map(({path,menu})=>(
                            <li key={path}><NavLink className={({isActive})=>isActive?'border-b px-3 font-bold text-blue-200 py-2 mx-5':'py-2 mx-5 px-3 text-white'} to={path}>{menu}</NavLink></li>
                        ))
                       } 
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;