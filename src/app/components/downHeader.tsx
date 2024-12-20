
// import React from "react";

// const DownHeader = () => {
//     return (
//       <>
//         <div className="w-full h-[10px]  md:px-[100px] py-6 bg-white">
//           <ul className="flex flex-wrap justify-between text-gray-800 text-sm font-medium">
//             <li className="text-gray-400 cursor-pointer">All Products</li>
//             <li className="text-gray-400 cursor-pointer">Plan Posts</li>
//             <li className="text-gray-400 cursor-pointer">Ceramics</li>
//             <li className="text-gray-400 cursor-pointer">Tables</li>
//             <li className="text-gray-400 cursor-pointer">Chairs</li>
//             <li className="text-gray-400 cursor-pointer">Crockery</li>
//             <li className="text-gray-400 cursor-pointer">Tableware</li>
//             <li className="text-gray-400 cursor-pointer">Cutlery</li>
//           </ul>
//         </div>
//       </>
//     );
//   };
  
//   export default DownHeader;
import React from "react";

const DownHeader = () => {
    return (
      <>
        <div className="w-full h-auto md:px-[100px] py-6 bg-white">
          <ul className="flex flex-wrap justify-between text-gray-800 text-sm font-medium gap-2 md:gap-0">
            <li className="text-gray-400 cursor-pointer">All Products</li>
            <li className="text-gray-400 cursor-pointer">Plan Posts</li>
            <li className="text-gray-400 cursor-pointer">Ceramics</li>
            <li className="text-gray-400 cursor-pointer">Tables</li>
            <li className="text-gray-400 cursor-pointer">Chairs</li>
            <li className="text-gray-400 cursor-pointer">Crockery</li>
            <li className="text-gray-400 cursor-pointer">Tableware</li>
            <li className="text-gray-400 cursor-pointer">Cutlery</li>
          </ul>
        </div>
      </>
    );
  };

export default DownHeader;
