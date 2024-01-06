'use client';
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../services/base";

const FeedbackItem = ({ item, onRefresh }) => {
  const [isCalled, setIsCalled] = useState(item.is_Called);

  const handleCheckboxChange = () => {
    setIsCalled(!isCalled);
  };

  const handleSaveChanges = () => {
    axios.put(
        `${baseURL}feedback/${item?.id}/`,
        {
            is_Called: isCalled,
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
  };

  return (
    <tr className="text-center">
      <td className="border border-black p-2">{item.id}</td>
      <td className="border border-black p-2">{item.name}</td>
      <td className="border border-black p-2">{item.number}</td>
      <td className="border border-black p-2  ">
      {isCalled ? 'Так' : 'Ні'}
        <input
        className="ml-2"
          type="checkbox"
          checked={isCalled}
          onChange={handleCheckboxChange}
        />
      </td>
      <td className="border border-black p-2">
        <button onClick={handleSaveChanges}>Зберегти зміни</button>
      </td>
    </tr>
  );
};

export default FeedbackItem;
