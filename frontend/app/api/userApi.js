import axios from 'axios';
import React, { useEffect, useState } from 'react';

const userApi = (token) => {
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    const res = await axios.get('http://localhost:8000/user/info', {
                        headers: { Authorization: token },
                    });

                    if (res.data) {
                        setIsLogged(true);
                        setIsAdmin(res.data.isAdmin); // Assuming your API response has an `isAdmin` field
                    }
                } catch (err) {
                    alert(err.response?.data?.msg || "An error occurred");
                }
            };
            getUser();
        }
    }, [token]);

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
    };
};

export default userApi;
