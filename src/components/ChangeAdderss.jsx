import { useState } from "react";

const ChangeAdderss = ({setAddress, setIsModalOpen }) => {
  const [newAddress,setNewAddress] =useState('')
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter new address"
        className="border p-2 w-full mb-4"
        onChange={(e)=>setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
         onClick={()=>setIsModalOpen(false)}
        className="bg-red-500 text-white py-2 px-4 rounded mr-2 hover:bg-red-600">
          Cancel
        </button>
        <button
         onClick={()=>{
          if (newAddress== '') {
            alert("The new Address field should not be empty")
          }else{
          setAddress(newAddress),
          setIsModalOpen(false)}}}
         className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAdderss;
