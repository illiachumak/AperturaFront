'use client'
import axios from "axios";
import React, { useState, useEffect} from "react";
import { baseURL } from "../services/base";
import OrderItem from './order'
import FeedbackItem from './feeback'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [orders, setOrders] = useState(null)
    const [feedback, setFeedback] = useState(null)
    const [token, setToken] = useState('');
    const [refresh, setRefresh] = useState(true);

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

          try {
            const resp = await axios.get(baseURL + 'feedback', {
              headers: {
                Authorization: `Token ${token}`,
              },
            });
    
            if (resp.status === 200) {
              console.log(resp.data);
              setFeedback(resp.data);
            }
          } catch (error) {
            console.error('Error fetching orders:', error);
          }
        };

    
        if (token) {
          getAdminData();
        }
      }, [token, refresh]);

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
          <div className=""> 
            <div className="flex flex-col gap-8 p-4  bg-[#1c1101]">
              <h1 className="text-[28px] bg-gray-500 px-4">Замовлення</h1>
                {orders && Object.values(orders).map((order, i)=>{
                    let status;
                    const getTitle = (i) => {
                        if(i===0) status = "Очікується"
                        if(i===1) status = "В обробці"
                        if(i===2) status = "Виконано"

                    }
                    getTitle(i)
                   return(
                    <div className="w-full flex flex-col" key={i}> 
                <span className="my-6 text-[24px]">{status}</span>
                  <table className="w-full text-black bg-white border border-black">
                    <thead>
                      <tr>
                        <th className="border border-black p-2">Id</th>
                        <th className="border border-black p-2">Time</th>
                        <th className="border border-black p-2">Name</th>
                        <th className="border border-black p-2">Number</th>
                        <th className="border border-black p-2">Email</th>
                        <th className="border border-black p-2">Price</th>
                        <th className="border border-black p-2">Payment</th>
                        <th className="border border-black p-2">Status</th>
                        <th className="border border-black p-2">Order Info</th>
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
                        <tr key={order.od+index}>
                        <OrderItem key={i} order={order} index={i} onRefresh={() => setRefresh(state => !state)} />
                        </tr>
                        
                    )})}
                    </tbody>
                  </table>
                </div>
                  )
                })}
                  
                </div>

                {/* Feedback */}

                <div className="flex flex-col gap-8 p-4 bg-[#1c1101]">
  <h1 className="text-[28px] bg-gray-500 px-4">Звязатися з нами</h1>
  {feedback && Object.values(feedback).map((order, i) => {
    console.log(order);
    let status;
    const getTitle = (i) => {
      if (i === 0) status = "Очікується";
      if (i === 1) status = "Виконано";
    };
    getTitle(i);
    return (
      <div className="w-full" key={i}>
        <span className="my-6 text-[24px]">{status}</span>
        <table className="w-full border-collapse border bg-white text-black border-black">
          <thead>
            <tr>
              <th className="border border-black p-2">Id</th>
              <th className="border border-black p-2">Name</th>
              <th className="border border-black p-2">Number</th>
              <th className="border border-black p-2">Is Called</th>
            </tr>
          </thead>
          <tbody>
            {order?.length && order.map((item, i) => {
              return (
                <React.Fragment key={item.id+i*8}>
                  <FeedbackItem item={item} onRefresh={() => setRefresh(state => !state)}/>
                </React.Fragment>
              );s
            })}
          </tbody>
        </table>
      </div>
    );
  })}
</div>
                </div>
          );
    }
}

export default Login