import Image from "next/image";

import Button from "@/app/Ui/Buttons";

export default function Home() {
  return (
    <section className="mb-10 flex h-[100vh] w-full flex-col justify-center md:flex-row">
      <div className=" flex w-full flex-col items-center justify-center gap-6 pl-0 md:items-start md:pl-[4rem] lg:pl-[5rem] 2xl:pl-[10rem]">
        <div className="titlemenu z-50 flex w-full flex-col items-center gap-1 md:w-1/2 md:items-start md:gap-2 md:text-left">
          <h1 className="font-extrabold text-[#4CAF50]">QRMenu</h1>
          <h2 className="font-extrabold">AL ALCANCE</h2>
          <h3 className="mb-4 font-extrabold md:mb-0">DE UN ESCANEO</h3>
          <p className="mb-2 w-[90%] text-center text-xl md:mb-2 md:w-full md:text-left">
            Crea tu menu digital con facilidad y llega a mas clientes
          </p>

          <div className="mt-5 w-1/2 md:text-left text-center">
            <Button
              color=""
              href="/"
              otroColor="bg-[#4CAF50] text-white"
              text="EMPEZAR"
            />
          </div>
        </div>
      </div>
      <div className="absolute md:w-1/2">
        <div className="relative left-[30rem] top-[10rem] z-10 hidden h-[350px] w-[250px] rotate-12 scale-x-[-1] md:left-[8rem] md:top-14 md:flex md:h-[670px] md:w-[520px] lg:left-[12rem] lg:top-6 lg:h-[750px] lg:w-[600px] xl:left-[20rem] xl:top-4 xl:h-[800px] xl:w-[650px] 2xl:right-0 2xl:top-0 2xl:h-[850px] 2xl:w-[700px]">
          <Image fill alt="" src="/img/menuQrBlue.png" />
        </div>
      </div>
    </section>
  );
}
