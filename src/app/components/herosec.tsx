// import Image from "next/image";
// import heroo from "../../../public/images/Blocks.png"
// const HeroSec=()=>{
//     return(
// <div className="w-[1360px] h-[842px] pl-12 pr-12">
//     <Image src={heroo} alt="hero "
//     width={1360}
//     height={842}
   
//     />
// </div>
//     )
// }
// export default HeroSec;


import Image from "next/image";
import heroo from "../../../public/images/Blocks.png";

const HeroSec = () => {
  return (
    <div className="w-full max-w-[1360px] h-auto mx-auto px-4 md:px-12">
      <Image 
        src={heroo} 
        alt="hero" 
        width={1360} 
        height={842} 
        className="w-full h-auto object-cover "
        priority
      />
    </div>
  );
};

export default HeroSec;
