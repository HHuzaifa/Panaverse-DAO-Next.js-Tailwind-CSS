import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (

    <nav className="bg-[#001038] fixed w-full z-50 py-1  rounded-b-3xl border-2 border-black">
      <div>
        <ul className="flex justify-center flex-row items-stretch">
          <li className="text-white px-9">
            <div className="flex flex-row px-10  justify-start">
              <Link href="/">
                <Image
                  src="Panaverse Logo.svg"
                  width="156"
                  height="35"
                  alt="footer logo"
                />
              </Link>
            </div>
          </li>
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
          <li className="text-white px-9 pt-1">
            <div className="flex flex-row justify-end px-10">
              <button className="bg-white rounded-full py-2 px-4 hover:bg-slate-300">
                <a href="https://portal.piaic.org/" target="_blank">
                  <h3 className="text-red-600 font-bold">Enroll</h3>
                </a>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
