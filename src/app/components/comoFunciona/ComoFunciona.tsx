import Image from "next/image";

export default function ComoFunciona() {
  return (
    <section className="relative">
      <div className="relative top-1 rotate-180">
        <svg
          fill="#4CAF50"
          viewBox="0 0 1000 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0v4s250 96 500 96 500-96 500-96V0H0Z" />
        </svg>
      </div>
      <div className="flex w-full flex-col items-center bg-[#4CAF50]">
        <h4 className="relative bottom-14 text-white">¿Como funciona ?</h4>
        <div className="gray mb-10 mt-2 flex h-full w-2/3 flex-col items-center gap-6">
          <div className="flex w-full flex-row gap-6">
            <div className="flex w-2/5 flex-col items-center justify-evenly rounded-three-corners bg-white p-4 shadow-xl">
              <div className="w-full pl-6 pr-6">
                <h5>Registrate</h5>
                <p>Crea tu cuenta en pocos pasos </p>
              </div>
              <Image alt="" height={90} src="/img/registro1.png" width={90} />
            </div>
            <div className="flex w-3/5 flex-col items-center justify-evenly rounded-three-corners bg-white p-4 shadow-xl">
              <div className="w-full pl-6 pr-6">
                <h5>Crea y personaliza tu menú</h5>
                <p>
                  Elige una plantilla, sube tu logo y edita fácilmente los
                  detalles de tu menú.
                </p>
              </div>
              <Image alt="" height={90} src="/img/menu1.png" width={90} />
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex w-3/5 flex-col gap-6">
              <div className="flex flex-col items-center justify-evenly rounded-three-corners bg-white p-4 shadow-xl">
                <div className="w-full pl-6 pr-6">
                  <h5>Revisa y guarda</h5>
                  <p>
                    Previsualiza tu menú para asegurarte de que todo esté
                    correcto y guárdalo.
                  </p>
                </div>
                <Image
                  alt=""
                  height={90}
                  src="/img/guardar-el-archivo.png"
                  width={90}
                />
              </div>
              <div className="flex flex-col items-center justify-evenly rounded-three-corners bg-white p-4 shadow-xl">
                <div className="w-full pl-6 pr-6">
                  <h5>Genera tu QR</h5>
                  <p>
                    Obtén un código QR único para compartir tu menú con tus
                    clientes.
                  </p>
                </div>
                <Image
                  alt=""
                  height={90}
                  src="/img/codigo-qr1.png"
                  width={90}
                />
              </div>
            </div>
            <div className="flex w-2/5 flex-col items-center justify-evenly rounded-three-corners bg-white p-4 shadow-xl">
              <div className="w-full pl-6 pr-6">
                <h5>Comparte con tus clientes</h5>
                <p>
                  Coloca el QR en tus mesas, redes sociales o web. Tus clientes
                  podrán escanearlo y ver el menú al instante.
                </p>
              </div>
              <Image alt="" height={190} src="/img/codigo-qr.png" width={190} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative bottom-1">
        <svg
          fill="#4CAF50"
          viewBox="0 0 1000 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0v4s250 96 500 96 500-96 500-96V0H0Z" />
        </svg>
      </div>
    </section>
  );
}
