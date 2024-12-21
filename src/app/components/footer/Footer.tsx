/* eslint-disable prettier/prettier */
import Image from "next/image";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex w-full bg-[#4CAF50] rounded-xl flex-col items-center justify-center mt-20 pl-10 pr-10">
      <Image alt="" height={150} src="/img/logowhite.svg" width={150} />
      <div className="w-full flex md:flex-row flex-col text-center items-center justify-around pb-10 pt-10">
        <ul className="flex flex-row gap-6 font-bold">
          <li className="text-[#ffff] hover:text-black cursor-pointer transition-colors duration-200">
            Home
          </li>
          <li className="text-[#ffff] hover:text-black cursor-pointer transition-colors duration-200">
            ¿Como funciona ?
          </li>
          <li className="text-[#ffff] hover:text-black cursor-pointer transition-colors duration-200">
            ¿Por qué elegir QRMenu?
          </li>
          <li className="text-[#ffff] hover:text-black cursor-pointer transition-colors duration-200">
            ¿Quienes somos?
          </li>
        </ul>
        <div className="flex flex-row gap-6 ">
          <FaLinkedin
            className="text-[#ffff] hover:text-black cursor-pointer transition-colors duration-200"
            size={30}
          />
          <FaInstagram
            className="text-[#ffff] hover:text-black cursor-pointer transition-colors duration-200"
            size={30}
          />
          <BiLogoGmail
            className="text-[#ffff] hover:text-black cursor-pointer transition-colors duration-200"
            size={30}
          />
        </div>
      </div>
      <p className="text-white mt-2 mb-2 font-bold">
        © {new Date().getFullYear()} Developed by TMGC{" "}
      </p>
    </footer>
  );
}
