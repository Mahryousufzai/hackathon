import Image from "next/image";
import heroo from "../../../public/images/Blocks.png"
const HeroSec=()=>{
    return(
<div className="ml-[100px] mt-[50px] mb-[50px]">
    <Image src={heroo} alt="hero "/>
</div>
    )
}
export default HeroSec;