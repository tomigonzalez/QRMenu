import Image from "next/image";

export default function ComoFunciona() {
  return (
    <section className="relative">
      {/* SVG de arriba */}
      <div className="relative top-1 rotate-180">
        <svg
          fill="#4CAF50"
          viewBox="0 0 1000 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0v4s250 96 500 96 500-96 500-96V0H0Z" />
        </svg>
      </div>

      {/* Contenido principal */}
      <div className="flex w-full flex-col items-center bg-[#4CAF50] md:gap-[4rem]">
        {/* Título */}
        <h4 className="relative text-center text-2xl font-bold text-white sm:text-3xl">
          ¿Cómo funciona?
        </h4>

        {/* Contenido central */}
        <div className="gray mb-10 mt-2 flex w-11/12 flex-col items-center gap-6 sm:w-3/4">
          {/* Primera fila */}
          <div className="flex w-full flex-col gap-6 md:flex-row">
            {/* Primer paso */}
            <div className="flex w-full flex-col items-center justify-evenly rounded-three-corners bg-white p-4 shadow-xl md:w-2/5">
              <div className="w-full px-4 text-center md:text-left">
                <h5 className="text-lg font-semibold  pb-2">Regístrate</h5>
                <p className="text-sm text-gray-600 pb-2">
                  Crea tu cuenta en pocos pasos.
                </p>
              </div>
              <Image
                alt="Registro"
                height={90}
                src="/img/registro1.png"
                width={90}
              />
            </div>

            {/* Segundo paso */}
            <div className="flex w-full md:w-3/5 flex-col items-center justify-evenly rounded-three-corners bg-white p-4 shadow-xl">
              <div className="w-full px-4 text-center md:text-left">
                <h5 className="text-lg font-semibold pb-2">
                  Crea y personaliza tu menú
                </h5>
                <p className="text-sm text-gray-600 pb-2">
                  Elige una plantilla, sube tu logo y edita fácilmente los
                  detalles de tu menú.
                </p>
              </div>
              <Image alt="Menú" height={90} src="/img/menu1.png" width={90} />
            </div>
          </div>

          {/* Segunda fila */}
          <div className="flex flex-col gap-6 md:flex-row">
            {/* Dos pasos pequeños */}
            <div className="flex w-full flex-col gap-6 md:w-3/5">
              {/* Revisa y guarda */}
              <div className="flex flex-col items-center justify-evenly rounded-three-corners bg-white p-4 shadow-xl">
                <div className="w-full px-4 text-center md:text-left">
                  <h5 className="pb-2 text-lg font-semibold">
                    Revisa y guarda
                  </h5>
                  <p className="text-sm text-gray-600 pb-2">
                    Previsualiza tu menú para asegurarte de que todo esté
                    correcto y guárdalo.
                  </p>
                </div>
                <Image
                  alt="Guardar"
                  height={90}
                  src="/img/guardar-el-archivo.png"
                  width={90}
                />
              </div>

              {/* Genera tu QR */}
              <div className="flex flex-col items-center justify-evenly rounded-three-corners bg-white p-4 shadow-xl">
                <div className="w-full px-4 text-center md:text-left">
                  <h5 className="pb-2 text-lg font-semibold">Genera tu QR</h5>
                  <p className="text-sm text-gray-600 pb-2">
                    Obtén un código QR único para compartir tu menú con tus
                    clientes.
                  </p>
                </div>
                <Image
                  alt="QR"
                  height={90}
                  src="/img/codigo-qr1.png"
                  width={90}
                />
              </div>
            </div>

            {/* Paso final */}
            <div className="flex w-full md:w-2/5 flex-col items-center justify-evenly rounded-three-corners bg-white p-4 shadow-xl">
              <div className="w-full px-4 text-center md:text-left">
                <h5 className="text-lg font-semibold pb-2">
                  Comparte con tus clientes
                </h5>
                <p className="text-sm text-gray-600 pb-2">
                  Coloca el QR en tus mesas, redes sociales o web. Tus clientes
                  podrán escanearlo y ver el menú al instante.
                </p>
              </div>
              <Image
                alt="Comparte"
                height={190}
                src="/img/codigo-qr.png"
                width={190}
              />
            </div>
          </div>
        </div>
      </div>

      {/* SVG de abajo */}
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
