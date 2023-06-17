import React from "react";
import { motion } from "framer-motion";

type Props = {};

function FeedbackCardAtlungstad({}: Props) {
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
        src="atlungstadLogo.jpg"
      />

      <div className="px-0 w-[250px] mx-auto  md:px-5 text-white">
        <h4 className="text-sm font-light">Atlunstad Brenneri AS</h4>
        <p className="uppercase text-sm mt-2">Ole Volden-Sandersen</p>
        <p className="uppercase tracking-[8px] text-sm mb-2">Daglig Leder</p>
        <p className="w-[250px] md:w-[300px] xl:w-[500px] text-sm md:text-base">
         
          Samarbeid og utvikling av ny hjemmeside, sammen med Camilla Reppen,
          var for oss på Atlungstad Brenneri en smidig, rask og god opplevelse.
          Camilla lyttet godt til våre behov, våre ønsker og kom med mange gode
          innspill for å gjøre siden brukervennlig både for våre gjester og for
          oss som brukere. Vi var opptatt av en side som skulle være levende,
          frisk og viste frem våre tjenester, historie og tilbud. Vi føler vi
          fikk en side som vi er med oss i vår utvikling. Utvikling og
          gjennomføring gikk smertefritt og raskt og resultatet er noe vi er
          stolte av å ha. Også etter den var ferdig, og vi hadde behov for
          tilføringer, etter som våre tjenester utviklet seg, tilpasset og
          fulgte Camilla oss meget godt opp.
        </p>
      </div>
    </article>
  );
}

export default FeedbackCardAtlungstad;
