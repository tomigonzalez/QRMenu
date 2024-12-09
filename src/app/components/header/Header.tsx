import Image from "next/image";

import Button from "@/app/Ui/Buttons";

export default function Header() {
  return (
    <header className="z-10 flex h-[10vh] w-full items-center justify-between pl-10 pr-10">
      <Image alt="" height={150} src="/img/logo.png" width={150} />
      <div className="flex w-[20%] justify-between">
        <Button color="#ffff" href="/" text="Login" />
        <Button color="#ffff" href="/" text="Registrarse" />
      </div>
    </header>
  );
}
