import axios from "axios";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{
const [cartItems,setCartItems]=useState({});

// Use localhost for development, production URL for production
const url = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
  ? "http://localhost:4000" 
  : "https://restraunt-management-system-backend.onrender.com";
const [token,setToken]= useState("");
const [food_list,setFoodList] = useState([]);

const addToCart= async (itemId)=>{
    if (!cartItems[itemId]) {
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    if (token) {
        await axios.post(url+"/api/cart/add",{itemId},{headers:{token}});
    }
}
const removeFromCart=async (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    if (token) {
        await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
}

const getTotalCartAmount=()=>{
    let totalAmount=0;
    for (const item in cartItems) {
        if (cartItems[item]>0) {
            let itemInfo =food_list.find((product)=>product._id===item); 
            totalAmount+=itemInfo.price* cartItems[item];
        }
        
    }
    return totalAmount;
}

const fetchFoodList= async ()=>{
    const response = await axios.get(url+"/api/food/list");
    setFoodList(response.data.data)
}

const loadCartData = async (token)=>{
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setCartItems(response.data.cartData);
}

useEffect(()=>{

async function loadData(){
    await fetchFoodList();
    if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
    }
}
loadData();
},[])

    const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

StoreContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default StoreContextProvider;