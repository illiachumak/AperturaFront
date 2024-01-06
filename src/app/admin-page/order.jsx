import axios from "axios";
import { useState } from "react";
import { baseURL } from "../services/base";
import { useRouter} from "next/navigation";
import React from "react";

const Order = ({ order, index, onRefresh}) => {
    const [orderStatus, setOrderStatus] = useState(order.status)
    const [isPaid, setIsPaid] = useState(order.payment);
    const router = useRouter()
    const handleChangeStatus = (status) => {
        setOrderStatus(status)
    };
    const handleTogglePayment = () => {
        setIsPaid(!isPaid);
    };
    const handleSendChanges = () => {
        axios.put(
            `${baseURL}order/${order?.id}/`,
            {
              payment: isPaid,
              status: orderStatus,
            },
            {
              headers: {
                Authorization: `Token ${sessionStorage.getItem('admin-token')}`,
              },
            }
          ).then(res => {
            alert("Замовлення успішно змінено")
            onRefresh()
          })
    }
    return (
            <React.Fragment key={order.id+index}>
            <td className="border border-gray-300 p-2">{order.id}</td>
            <td className="border border-gray-300 p-2 text-black">{new Date(order.date_created).toLocaleString()}</td>
            <td className="border border-gray-300 p-2">{order.name}</td>
            <td className="border border-gray-300 p-2">{order.number}</td>
            <td className="border border-gray-300 p-2">{order.email}</td>
            <td className="border border-gray-300 p-2">{order.total_price}</td>
            <td className="border border-gray-300 p-2">
                <label className="flex flex-col">
                    {isPaid ? "Оплачено" : "Не Оплачено"}
                    <input
                        type="checkbox"
                        checked={isPaid}
                        onChange={handleTogglePayment}
                    />
                </label>
                </td>
            <td className="border border-gray-300 p-2">
                <select
                    value={orderStatus}
                    onChange={(e) => handleChangeStatus(e.target.value)}
                >
                    <option value="ОЧІКУЄТЬСЯ">Очікується</option>
                    <option value="В ОБРОБЦІ">В обробці</option>
                    <option value="ВИКОНАНО">Виконано</option>
                </select>
            </td>
            <td className="border border-gray-300 p-2">
                {order.products.map((product, i) => (
                    <div key={product.id + i}>
                        <table className="min-w-full text-black bg-white border border-gray-300">
                        <thead>
                                    <tr>
                                        <th className="border border-gray-300 p-2">Product Name</th>
                                        <th className="border border-gray-300 p-2">Price</th>
                                        <th className="border border-gray-300 p-2">Color</th>
                                        <th className="border border-gray-300 p-2">Modifications</th>
                                        <th className="border border-gray-300 p-2">Quantity</th>
                                        {/* Додайте інші заголовки для кожного поля */}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="border border-gray-300 p-2">{product.product_name}</td>
                                        <td className="border border-gray-300 p-2">{product.price}</td>
                                        <td className="border border-gray-300 p-2">{product.color}</td>
                                        <td className="border border-gray-300 p-2">{product.modifications.map((mod, i) => {
                                            return(
                                                <div key={mod.type +i} className="flex w-full justify-between">
                                                    <span>{mod.type}</span> - <span>{mod.name}</span>
                                                </div>
                                            )
                                        })}</td>
                                        <td className="border border-gray-300 p-2">{product.quantity}</td>
                                        {/* Додайте інші дані для кожного поля */}
                                    </tr>
                                    {/* Додайте інші рядки для кожного продукту */}
                                    </tbody>
                        </table>
                    </div>
                ))}
            </td>
            <td className="border border-gray-300 p-2">
                <button onClick={handleSendChanges}>Підтвердити зміни</button>
            </td>
            </React.Fragment>
    );
};
export default Order;
