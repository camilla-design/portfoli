import React from "react";
import { motion } from "framer-motion";

type Props = {};

function FeedbackCardExplore({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[800px] snap-center bg-[#2272FF]/90 p-5 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="exploreLogo.jpg"
      />

      <div className="px-0 md:px-5 w-[250px] mx-auto text-white">
        <h4 className="text-sm font-light">Explore Leka</h4>
        <p className="uppercase text-sm mt-2">Lene Reppen Grydeland</p>
        <p className=" uppercase tracking-[8px] text-sm mb-2">Daglig Leder</p>
        <p className="w-[250px] md:w-[300px] xl:w-[500px] text-[12px] md:text-base">
         
          Explore Leka har brukt Camilla Reppen til produksjon av hjemmeside og
          logo, og sitter igjen med både gode produkter og gode opplevelser.
          Camilla loset oss kompetent, kreativt og engasjert gjennom prosessen
          fra ide til ferdig produkt. Gjennom å bruke tid på å bli kjent med
          oss, vårt firma og hva vi ønsker å formidle, samhandlet Camilla oss på
          en god og trygg måte for å finne gode ideer og løsninger. Jobber
          raskt, er positiv og løsningsorientert. Kan trygt anbefales!
        </p>
      </div>
    </article>
  );
}

export default FeedbackCardExplore;
