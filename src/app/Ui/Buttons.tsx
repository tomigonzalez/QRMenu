import Link from "next/link";

interface ButtonProps {
  text: string;
  color?: string; // Opcional, con un color por defecto
  href?: string;
}

export default function Button({
  text,
  color = "#0070f3", // Color por defecto
  href,
}: ButtonProps) {
  const buttonStyle = {
    backgroundColor: color,
    color: "black", // Texto en blanco para contraste
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: " 1rem 1rem 0rem 1rem ",
    cursor: "pointer",
  };

  if (href) {
    return (
      <Link href={href}>
        <button className="w-full" style={buttonStyle} type="button">
          {text}
        </button>
      </Link>
    );
  }

  return (
    <button style={buttonStyle} type="button">
      {text}
    </button>
  );
}
