import Payments from "@/data/Payments";
import Image from "next/image";
import React, { useState } from "react";

const Payment = () => {
  const [activeIndex, setActiveIndex] = useState<any>();
  return (
    <div>
      <h2 className="font-semibold mt-2">Payments</h2>
      <div className="grid grid-cols-5">
        {Payments.map((item, index) => (
          <div className={`border-[2px] mt-2
           hover:border-yellow-400  hover:scale-110 transition-all cursor-pointer rounded-md m-2 w-full p-1 flex items-center ${activeIndex == index ? 'border-yellow-400':null}`} onClick={()=>setActiveIndex(index)}>
            <Image src={item.image} alt="card" width={50} height={50} />
          </div>
        ))}
         
      </div>
    </div>
  );
};

export default Payment;
