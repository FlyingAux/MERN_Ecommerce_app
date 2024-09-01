import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GlobalState } from '../GlobalState';

const userApi = (token) => {
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    const res = await axios.get('http://localhost:8000/user/info', {
                        headers: { Authorization: token },
                    });

                        setIsLogged(true);
                        res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
                        console.log('userApi',res) 
                    
                } catch (err) {
                    alert(err.response?.data?.msg || "An error occurred");
                }
            };
            getUser();
        }
    }, [token]);

    const addCart = async (product) => {
        if (!isLogged) {
            return alert("Please log in to add products to your cart.");
        }

        // Check if the product is already in the cart
        const check = cart.every(item => item.id !== product._id);

        if (check) {
            // If the product is not in the cart, add it with a quantity of 1
            setCart([...cart, { ...product, quantity: 1 }]);
        } else {
            // Alert the user if the product is already in the cart
            alert("This product has already been added to the cart.");
        }
    };

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        cart: [cart, setCart],
        addCart: addCart
    };
};

export default userApi;
