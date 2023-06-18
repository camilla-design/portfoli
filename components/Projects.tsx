import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-400 text-sm">
        Prosjekter
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8C4D16]">
        <div className="w-screen mx-auto flex-shrink-0 snap-center flex flex-col space-y-1 items-center justify-center p-5 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
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
            src="atlungstad.png"
            width={230}
          />

          <div className="space-y-1 px-0 md:px-10 max-w-6xl">
            <h4 className="uppercase text-sm text-gray-400 text-center">
              Prosjekt 1 av : <br></br>
              <span className="uppercase text-sm tracking-[13px] text-gray-300">
                Atlungstad Brenneri AS
              </span>
            </h4>

            <p className="text-[12px] w-[320px] md:text-base text-center md:text-left text-gray-300 pb-5">
              {" "}
              De ønsket en uppdatering på siden sin, de ønsket å føle at siden
              ble en enhet med både takeaway, shop og booking side. De ønsket en
              restaurant side som kan brukes på alle plattformer, men spesielt
              mobil. De ønsket å beholde Brand Identity av historien. En
              lettlest nettside for alle aldre, med gode bilder og lettest
              informasjon. Brukt til denne nettsiden: React.js, Sass, Bootstrap,
              Mailchimp og Strapi.io som CMS
            </p>
            <a className="bg-white p-2 rounded-md text-[#2272FF] " href="https://atlungstadspiseri.no">Atlunstad Brenner</a>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-1 items-center justify-center p-5 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
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
            src="exploreleka.png"
            width={230}
          />

          <div className="space-y-5 px-0 md:px-10 max-w-6xl">
            <h4 className="uppercase text-sm text-gray-400 text-center">
              Prosjekt 2 av : <br></br>
              <span className="uppercase text-sm tracking-[13px] text-gray-300">
                Explore Leka
              </span>
            </h4>

            <p className="text-[12px] md:text-base text-center md:text-left text-gray-300 pb-5">
              {" "}
              Explore Leka er en turist selskap som ønsket en nettside som
              representerte dem. De ønsket å vise det unike landskapet og gi
              guidet turer. Dele naturopplevelser og kjærligheten de har før
              øya. De ønsket en restaurant side som kan brukes på alle
              plattformer, men spesielt mobil. Nettsiden er bygget med: HTML,
              CSS, JavaScript.
            </p>
            <a className="bg-white p-2 rounded-md text-[#2272FF] " href="https://exploreleka.no">Explore Leka</a>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-1 items-center justify-center p-10 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
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
            src="explore2.png"
            width={400}
          />

          <div className="space-y-5 px-0 md:px-10 max-w-6xl">
            <h4 className="uppercase text-sm text-gray-400 text-center">
              Prosjekt 3 av : <br></br>
              <span className="uppercase text-sm tracking-[13px] text-gray-300">
                Explore Leka oppdatering
              </span>
            </h4>

            <p className="text-[12px] md:text-base text-center md:text-left text-gray-300 pb-5">
              {" "}
              De har valgt å trappe ned på bedriften. Den nye siden er bygget
              med: Next.js, Tailwind CSS, TypeScript, React Animasjon, Sanity.io
              som CMS.{" "}
            </p>
            <a className="bg-white p-2 rounded-md text-[#2272FF] " href="https://coruscating-marzipan-0939c0.netlify.app">
              Explore Leka
            </a>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-1 items-center justify-center p-10 md:p-44 h-screen">
          <motion.img
            initial={{
              y: -300,
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
            src="unicef.png"
            width={300}
          />

          <div className="space-y-5 px-0 md:px-10 max-w-6xl">
            <h4 className="uppercase text-sm text-gray-400 text-center">
              Prosjekt 4 av : <br></br>
              <span className="uppercase text-sm tracking-[13px] text-gray-300">
                Unicef
              </span>
            </h4>

            <p className="text-[12px] md:text-base text-center md:text-left text-gray-300 pb-5">
              {" "}
              Unicef ønsket en morsdagskampanje, hvor fokuset er på mødre og barn. Viktig å følge brand identity manual med plassering av bilder, text, logo, font og farger. Laget med: HTML, CSS {" "}
            </p>
            <a className="bg-white p-2 rounded-md text-[#2272FF] " href="http://camillareppen.no/unicef/">
              UNICEF
            </a>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#2272FF]/50 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
