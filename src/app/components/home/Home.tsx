import Image from "next/image";

import Button from "@/app/Ui/Buttons";

export default function Home() {
  return (
    <section className="flex h-[100vh] w-full pb-16">
      <div className="flex w-1/2 flex-col items-center justify-center gap-6 pl-[9rem]">
        <div className="titlemenu flex flex-col gap-2">
          <h1 className="font-extrabold text-[#4CAF50]">QRMENU</h1>
          <h2 className="font-extrabold">AL ALCANCE</h2>
          <h3 className="font-extrabold">DE UN ESCANEO</h3>
          <p className="text-xl">
            Crea tu menu digital con facilidad y llega a mas clientes
          </p>
        </div>
        <div className="w-2/5 self-start">
          <Button color="#4CAF50" href="/" text="EMPEZAR" />
        </div>
      </div>
      <div className="relative bottom-20 z-10 h-[800px] w-[650px] rotate-12 scale-x-[-1]">
        <Image fill alt="" src="/img/menuQrBlue.png" />
      </div>
    </section>
  );
}
