import Image from "next/image";

import Button from "@/app/Ui/Buttons";

export default function Header() {
  return (
    <header className="absolute z-40 flex h-[10vh] w-full items-center justify-between pl-10 pr-10">
      <Image alt="" height={150} src="/img/logo.png" width={150} />
      <div>
        <Button
          color="lg:bg-white lg:text-black"
          href="/"
          otroColor="bg-[#4CAF50] text-white"
          text="Iniciar sesion"
        />
      </div>
    </header>
  );
}
