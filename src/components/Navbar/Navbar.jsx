import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/ecommerce-logo.svg";
import {ShoppingCartIcon} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const Navbar = () => {

    const [menu,setmenu] = useState("")

    return (
        <div className="navbar flex justify-between items-center px-20 py-4 shadow-md">
            <Link to='/'>
                <img src={logo} alt="logo" height={80} width={80} className="w-16 h-16" onClick={()=>{setmenu("home")}}/>
            </Link>
            
                <ul className="flex w-full justify-evenly text-primary gap-4 text-xl font-medium categories">
                    <li onClick={()=>{setmenu("mens")}}><Link to='/mens'>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
                    <li onClick={()=>{setmenu("women")}}><Link to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
                    <li onClick={()=>{setmenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
                    <li onClick={()=>{setmenu("offers")}}><Link to='/offers'>Offers</Link>{menu==="offers"?<hr/>:<></>}</li>
                </ul>
            
            <div className="flex gap-4">
                <Link to='/login'>
                    <button className="btn btn-primary btn-sm btn-outline rounded-full h-fit py-1 px-6 text-base">Login</button>
                </Link>
                <Link to='/cart'>
                    <div className="relative w-fit h-fit"> 
                    <ShoppingCartIcon className="w-6 h-6 stroke-Primary" />
                    <span id="CartCount" className="cart-count rounded-full bg-[red] absolute top-0 text-[white]">0</span>
                </div>
                </Link>
            </div>
       </div>
    )
};

export default Navbar;