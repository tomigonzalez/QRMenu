import ComoFunciona from "./components/comoFunciona/ComoFunciona";
import Home from "./components/home/Home";
import PorQueElegir from "./components/porQueElegir/PorQueElegir";
import QuienesSomos from "./components/quienesSomos/QuienesSomos";

export default function HomePage() {
  return (
    <>
      <Home />
      <ComoFunciona />
      <PorQueElegir />
      <QuienesSomos />
    </>
  );
}
