/* eslint-disable prettier/prettier */
import React from "react";
import "../porQueElegir/acordeon.css";
import Image from "next/image";
interface AccordionItem {
  id: string;
  icon: string;
  imageSrc: string;
  title: string;
  description: string;
}

const accordionItems: AccordionItem[] = [
  {
    id: "Digitalización",
    icon: "🖥️",
    imageSrc: "/img/primerAcordeon.jpg",
    title: "Digitalización del menú",
    description:
      "Olvídate del papel. Personaliza y actualiza tu menú en segundos.",
  },
  {
    id: "Fácil",
    icon: "📲",
    imageSrc: "/img/segundoAcordeon.jpg",
    title: "Fácil acceso",
    description:
      "Tus clientes pueden ver tu menú desde sus teléfonos escaneando un QR.",
  },
  {
    id: "Ahorro",
    icon: "⌚",
    imageSrc: "/img/tercerAcordeon.jpg",
    title: "Ahorro de tiempo",
    description:
      "Simplifica la gestión de tu menú con nuestras plantillas fáciles de usar.",
  },
  {
    id: "Personalización",
    icon: "📝",
    imageSrc: "/img/cuartoAcordeon.jpg",
    title: "Personalización",
    description: "Incluye tu logo y diseña un menú único para tu restaurante.",
  },
];

function PorQueElegir() {
  return (
    <section className="w-full h-auto flex flex-col justify-center items-center">
      <h4 className="text-black m-20">¿Por qué elegir QRMenu?</h4>
      <div id="demo">
        <div className="accordion-wrapper">
          {accordionItems.map(
            ({ id, icon, imageSrc, title, description }, index) => (
              <details key={id} id={id} name="accordion" open={index === 0}>
                <summary className="flex items-center  p-4">
                  <span>{icon}</span>
                  <Image
                    fill
                    alt={title}
                    className="h-full w-full object-cover"
                    draggable={false}
                    src={imageSrc}
                  />
                </summary>
                <div className="details-content-wrapper p-4">
                  <h5 className="font-bold">{title}</h5>
                  <p className="text-xl">{description}</p>
                </div>
              </details>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default PorQueElegir;
