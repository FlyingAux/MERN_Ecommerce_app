import axios from 'axios'
import React, { useEffect, useState } from 'react'

const userApi = () => {

    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(()=>{
        if(token){
            const getUser = async ()=>{
                try{
                    const res = await axios.get('http://localhost:8000/user/info',{headers: {Authorization: token}})
                }
                catch(err){
                    alert(err.response.data.msg)
                }
            }
            getUser()
        }
    },[token])

  return (
    <>
        User
    </>
  )
}

export default userApi