// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// export default function Header() {
//   const [showMenu, setShowMenu] = useState(false);

//   const handleMenuClick = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <header className="flex justify-between items-center px-20 py-3 bg-[#001038] border-black  w-full z-50 sticky top-0">
//       <div>
//         <Link href="/">
//           <Image
//             src="Panaverse Logo.svg"
//             width="156"
//             height="35"
//             alt="header logo"
//           />
//         </Link>
//       </div>

//       <ul className="flex justify-between space-x-1">
//         <li className="text-white px-9 pt-2">
//           <Link href="/">About</Link>
//         </li>
//         <li className="text-white px-9 pt-2">
//           <Link href="End-Goal">End Goal</Link>
//         </li>
//         <li className="text-white px-9 pt-2">
//           <Link href="Courses">Courses</Link>
//         </li>
//         <li className="text-white px-9 pt-2">
//           <Link href="Fellowship">Fellowship</Link>
//         </li>
//         <li className="text-white px-9 pt-2">
//           <Link href="Detail">Detailed</Link>
//         </li>
//       </ul>

//       <div className="flex flex-row justify-end px-10">
//         <button className="bg-white rounded-full py-2 px-4 hover:bg-slate-300">
//           <a href="https://portal.piaic.org/" target="_blank">
//             <h3 className="text-red-600 font-bold">Enroll</h3>
//           </a>
//         </button>
//       </div>







//       <div className="flex flex-row justify-end px-10 ">
//         <button onClick={handleMenuClick}>
//           <div className="flex flex-col">
//             <div className="w-5 h-1 bg-white rounded-sm"></div>
//             <div className="w-5 h-1 bg-white rounded-sm my-1"></div>
//             <div className="w-5 h-1 bg-white rounded-sm"></div>
//           </div>
//         </button>
//       </div>

//       {showMenu && (
//         <div className="absolute top-16 right-0 bg-[#041E48] bg-opacity-80 rounded-3xl shadow-md p-20">
//           <ul className="flex flex-col justify-center text-center">
//             <li className="py-2 text-white">
//               <Link href="/">About</Link>
//             </li>
//             <li className="py-2 text-white">
//               <Link href="End-Goal">End Goal</Link>
//             </li>
//             <li className="py-2 text-white">
//               <Link href="Courses">Courses</Link>
//             </li>
//             <li className="py-2 text-white">
//               <Link href="Fellowship">Fellowship</Link>
//             </li>
//             <li className="py-2 text-white">
//               <Link href="Detail">Detailed</Link>
//             </li>
//             <li>
//               <div className="flex flex-row justify-end px-10 mt-4">
//                 <button className="bg-white rounded-full py-2 px-4 hover:bg-slate-300">
//                   <a href="https://portal.piaic.org/" target="_blank">
//                     <h3 className="text-red-600 font-bold">Enroll</h3>
//                   </a>
//                 </button>
//               </div>
//             </li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }

"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex justify-between items-center px-4 md:px-20 py-3 bg-[#001038] border-black w-full z-50 sticky top-0">
      <div>
        <Link href="/">
          <Image
            src="Panaverse Logo.svg"
            width="156"
            height="35"
            alt="header logo"
          />
        </Link>
      </div>

      <div className="flex items-center">
        <button onClick={handleMenuClick} className="md:hidden">
          <div className="flex flex-col">
            <div className="w-5 h-1 bg-white rounded-sm"></div>
            <div className="w-5 h-1 bg-white rounded-sm my-1"></div>
            <div className="w-5 h-1 bg-white rounded-sm"></div>
          </div>
        </button>

        <ul
          className={`${
            showMenu ? "flex" : "hidden"
          } md:flex md:justify-between md:space-x-1 mt-6 md:mt-0`}
        >
          <li className="text-white px-9 pt-2">
            <Link href="/">About</Link>
          </li>
          <li className="text-white px-9 pt-2">
            <Link href="End-Goal">End Goal</Link>
          </li>
          <li className="text-white px-9 pt-2">
            <Link href="Courses">Courses</Link>
          </li>
          <li className="text-white px-9 pt-2">
            <Link href="Fellowship">Fellowship</Link>
          </li>
          <li className="text-white px-9 pt-2">
            <Link href="Detail">Detailed</Link>
          </li>
          <li>
            <div className="flex flex-row justify-end px-10 mt-4">
              <button className="bg-white rounded-full py-2 px-4 hover:bg-slate-300">
                <a href="https://portal.piaic.org/" target="_blank">
                  <h3 className="text-red-600 font-bold">Enroll</h3>
                </a>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
