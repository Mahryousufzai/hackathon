import React from "react";
import Image from "next/image";
import Photo from "../../../public/images/Right.jpg";
import Photo1 from "../../../public/images/bottles.png";
import Photo2 from "../../../public/images/bottle.png";
import Photo3 from "../../../public/images/bulb.png";

const ProductSingle=()=>{
    return(
        <div className="w-full">
        <div className="flex gap-5 p-6 pl-48" >


            <div><Image src={Photo} alt="" title=""   className="w-full object-cover "  width={100}  height={100}/>
            <p className="mt-2">The Dandy chair</p>
            <p className="mt-2">£250</p></div>
            <div><Image src={Photo1} alt="" title=""/>
            <p className="mt-2">Rustic Vase Set</p>
            <p className="mt-2">£155</p></div>
            <div><Image src={Photo2} alt="" title=""/>
            <p className="mt-2">The Silky Vase</p>
            <p className="mt-2">£125</p></div>
            <div><Image src={Photo3} alt="" title=""/>
            <p className="mt-2">The Lucy Lamp</p>
            <p className="mt-2">£399</p></div>

        </div>
        <div>
        <button className="bg-gray-100 hover:bg-[#2A254c] text-black text-base tracking-wide py-3.5 px-6 hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none text-center ml-[720px] mb-9">
            View Collection
          </button>
        </div>
        </div>
    )
}
export default ProductSingle;