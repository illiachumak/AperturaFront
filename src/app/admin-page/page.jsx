'use client'
import axios from "axios";
import { useState, useEffect} from "react";
import { baseURL } from "../services/base";
import OrderItem from './order'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [orders, setOrders] = useState(null)
    const [token, setToken] = useState('');

    useEffect(() => {
        const storedToken = sessionStorage.getItem('admin-token');
        if (storedToken) {
          setToken(storedToken);
        }
      }, []);
    useEffect(() => {
        const getAdminData = async () => {
          try {
            const resp = await axios.get(baseURL + 'order', {
              headers: {
                Authorization: `Token ${token}`,
              },
            });
    
            if (resp.status === 200) {
              console.log(resp.data);
              setOrders(resp.data);
            }
          } catch (error) {
            console.error('Error fetching orders:', error);
          }
        };
    
        if (token) {
          getAdminData();
        }
      }, [token]);

    const onButtonClick = async () => {
        try{
        const resp = await axios.post(baseURL+'user/login/',{
            email,
            password
        })
        if(resp.status === 200){
            sessionStorage.setItem('admin-token', resp.data.token)
            setToken(resp.data.token)
        } else{
            
        }
     } catch{
        alert('Введіть правильний логін і пароль!')
     }
            
    }

    if(!token)return <div className="flex w-full h-full justify-center items-center flex-col">
        <div className={"titleContainer"}>
            <div>Admin Page</div>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={email}
                placeholder="Логін"
                onChange={ev => setEmail(ev.target.value)}
                className='rounded-lg text-black px-4 py-2' />
            <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className='rounded-lg '>
            <input
                value={password}
                placeholder="Пароль"
                onChange={ev => setPassword(ev.target.value)}
                className='rounded-lg text-black px-4 py-2' />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className='w-full px-12 py-2 bg-slate-50 text-black rounded-lg'
                type="button"
                onClick={onButtonClick}
                value={"Log in"} />
        </div>
    </div>

    else{
        
        return (
            <div className="flex flex-col gap-8 p-4  bg-[#1c1101]">
                {orders && Object.values(orders).map((order, i)=>{
                    let status;
                    const getTitle = (i) => {
                        if(i===0) status = "Очікується"
                        if(i===1) status = "В обробці"
                        if(i===2) status = "Виконано"

                    }
                    getTitle(i)
                   return(
                    <div className="w-full flex flex-col"> 
                <span className="my-6 text-[32px]">{status}</span>
                  <table className="w-full text-black bg-white border border-gray-300">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 p-2">Id</th>
                        <th className="border border-gray-300 p-2">Time</th>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Number</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Price</th>
                        <th className="border border-gray-300 p-2">Payment</th>
                        <th className="border border-gray-300 p-2">Status</th>
                        <th className="border border-gray-300 p-2">Order Info</th>
                      </tr>
                    </thead>
                    <tbody>
                    {order.map((order, index) => {
                        let orderStatus = status;
                        let payment = order.payment;
                    
                        const handleChangeStatus = (status) => {
                            orderStatus = status 
                        }
                        return(
                        <tr key={index}>
                        <OrderItem key={i} order={order} index={i} />
                        </tr>
                        
                    )})}
                    </tbody>
                  </table>
                </div>
                  )
                })}
                  
                </div>
          );
    }
}

export default Login