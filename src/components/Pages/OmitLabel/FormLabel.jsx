import React, { useState } from "react";
import Button from "../../Button";

const FormLabel = () => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    console.log(firstname,lastname,email)

    const getFirstName = (e)=>{

        setFirstName(e.target.value)
    }

    const getLastName = (e)=>{
        setLastName(e.target.value)
    }

    const getEmail = (e)=>{
        setEmail(e.target.value)
    }

    
  return (
    <div className="bg-white flex flex-col items-center justify-center p-20 ">
      <div className=" ">
        <h2 className="text-2xl font-[poppins] font-semibold text-blue-950 p-5">
          Omit Label Repition
        </h2>
      </div>

      <form className="flex flex-col  border border-gray-300 rounded-md  ">
        <div className="flex flex-col gap-2 mx-6 py-5">
          <label htmlFor="" className="">
            Firstname:
          </label>
          <input
            type="text"
            name="first name"
            id="first name"
            value={firstname}
            onChange={getFirstName}
            className="rounded-md px-6 py-2 w-[14rem] border border-blue-950"
          />

          <label htmlFor="" className="">
            Lastname:
          </label>
          <input
            type="text"
            name="last name"
            id="last name"
            value={lastname}
            onChange={getLastName}
            className="rounded-md px-6 py-2 w-[14rem] border border-blue-950 "
          />

          <label htmlFor="" className="">
            Email:(required)
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={getEmail}
            className="rounded-md px-6 py-2 w-[14rem] border border-blue-950 "
          />
          <button className="bg-blue-950 w-[14rem] rounded-md px-6 py-2 mt-3 text-white text-xl">
           Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLabel;
