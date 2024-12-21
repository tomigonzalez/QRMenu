/* eslint-disable prettier/prettier */
import Image from "next/image";

import Button from "@/app/Ui/Buttons";

export default function Home() {
  return (
    <section className="flex md:py-4 h-screen">
      <div className="container mx-auto flex max-w-7xl flex-col lg:h-auto h-full  md:flex-row md:items-center px-10">
        <div className="lg:w-1/2 sm:justify-center z-40 lg:auto w-full h-full content-center">
          <div className="flex flex-col lg:items-start place-items-center">
            <h1 className="text-5xl font-extrabold text-[#4CAF50] md:text-6xl lg:text-7xl">
              QRMenu
            </h1>
            <h2 className="text-4xl font-extrabold md:text-5xl lg:text-6xl">
              AL ALCANCE
            </h2>
            <h3 className="mb-4 text-4xl font-extrabold md:mb-6 md:text-5xl lg:text-6xl">
              DE UN ESCANEO
            </h3>
            <p className="mb-6 text-base leading-relaxed md:text-start text-center md:text-xl ">
              Crea tu menú digital con facilidad y llega a más clientes.
            </p>
            <div className="mt-5">
              <Button
                color=""
                href="/"
                otroColor="bg-[#4CAF50] text-white"
                text="EMPEZAR"
              />
            </div>
          </div>
        </div>
        <div className="relative md:w-1/2 lg:block hidden ">
          <div className="relative rotate-12 scale-x-[-1] z-30 h-auto w-full pb-[75%] md:pb-[100%] lg:pb-[120%]">
            <Image
              fill
              priority
              alt="Imagen de menú QR"
              src="/img/menuQrBlue.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
