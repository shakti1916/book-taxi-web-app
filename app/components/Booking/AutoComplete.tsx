"use client"

import React, { useEffect, useState } from "react";
import Cars from "../Cars";
import Payment from "../Payment";

const AutoComplete = () => {
    const [source, setSource] = useState<any>()
    const [sourceChange, setSourceChange] = useState<any>(false)

    const [addressList, setAddressList] = useState<any>([])
    const [destination,setDestination] = useState<any>()
    const [destinationChange, setDestinationChange] = useState<any>(false)

    useEffect(()=>{
    const delay = setTimeout(()=>{

            getAddressList()
        },1000)
        return ()=>clearTimeout(delay)
        
    },[source,destination])


    const getAddressList = async ()=>{
      setAddressList([])
      const query = sourceChange ? source :destination
        const res = await fetch('/api/search-address?q='+query,{
           headers:{
            "Content-Type": "application/json"
           } 
        })

        const result = await res.json()
        console.log("gi"+ JSON.stringify(result))

        setAddressList(result)
        
    }

  return (
    <div className="mt-5">
      <div>
        <label htmlFor="" className="text-gray-400">Where From?</label>
        <input
          type="text"
          className="w-full border-[1px] rounded-md outline-none focus:border-yellow-300 p-1"
          value={source}
          onChange={(e)=>{setSource(e.target.value); setSourceChange(true)}}
        />
           {addressList?.suggestions && sourceChange ? (
  <div className="shadow-md p-1 rounded-md  mt-4 bg-white ">
    {addressList?.suggestions?.map((item: any, index: number) => (
      <h2 className="p-3 cursor-pointer hover:bg-gray-100 mt-4" onClick={()=>{setSource(item.full_address); setAddressList([]); setSourceChange(false)}} key={index}>{item.full_address}</h2>
    ))}
  </div>
) : null}

      </div>
      <div className="mt-5 relative">
        <label htmlFor="" className="text-gray-400">Where To?</label>
        <input value={destination} onChange={(e)=>{setDestination(e.target.value);setDestinationChange(true)}}
          type="text"
          className="w-full border-[1px] rounded-md outline-none focus:border-yellow-300 bg-white p-2"
        />
        {addressList?.suggestions && destinationChange ? (
  <div className="shadow-md p-1 rounded-md absolute mt-4 bg-white">
    {addressList?.suggestions?.map((item: any, index: number) => (
      <h2 className="p-3 cursor-pointer hover:bg-gray-100 mt-4" onClick={()=>{setDestination(item.full_address); setAddressList([])}} key={index}>{item.full_address}</h2>
    ))}
  </div>
) : null}

      </div>
      <Cars/>
      <Payment/>
      <button className="bg-yellow-400 px-2 py-2 mt-4 w-full rounded-md text-black">
            Book
          </button>
    </div>
  );
};

export default AutoComplete;
