import Link from "next/link";

interface ButtonProps {
  text: string;
  color?: string; // Clase CSS para el color base
  otroColor?: string; // Clase CSS para el color responsivo
  href?: string;
}

export default function Button({
  text,
  color = "bg-primary", // Clase por defecto
  otroColor = "md:bg-secondary", // Clase responsiva
  href,
}: ButtonProps) {
  const buttonClasses = `
    ${otroColor}
    px-4 py-2 
    rounded-lg 
    cursor-pointer
  `;

  if (href) {
    return (
      <Link href={href}>
        <button className={buttonClasses} type="button">
          {text}
        </button>
      </Link>
    );
  }

  return (
    <button className={buttonClasses} type="button">
      {text}
    </button>
  );
}
