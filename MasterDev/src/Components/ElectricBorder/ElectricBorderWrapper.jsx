import { useEffect, useState } from "react";
import ElectricBorder from "./ElectricBorder"; // tu componente

const ElectricBorderWrapper = ({ children, ...props }) => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768); // breakpoint para móvil
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isDesktop) {
    // Si es móvil, simplemente devolvemos el contenido sin animación
    return <div>{children}</div>;
  }

  // En escritorio, sí renderizamos ElectricBorder
  return <ElectricBorder {...props}>{children}</ElectricBorder>;
};

export default ElectricBorderWrapper;
