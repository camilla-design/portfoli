import React from 'react';
import { motion } from "framer-motion";


type Props = {}


function FeedbackCardNoroff ({ }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[800px] snap-center bg-gray-50/90 p-5 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
         className='w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
         src="noroffLogo.png"/>

         <div className='px-0 md:px-5 text-black'>
             <h4 className='text-sm font-light'>Noroff School of Technology and Digital Media</h4>
             <p className='uppercase text-sm mt-2'>Manuel Ferreira</p>
             <p className='text-black uppercase tracking-[8px] text-sm mb-2'>Lærer</p>
             <p className='w-[300px] md:w-[300px] xl:w-[500px] text-sm md:text-base'> "Camilla is one hungry mind with a big appetite for web design and front-end development. As a student Camilla ask many good questions and is detail orientated. She would make a great addition to any team."</p>
         </div>
    </article>
  )
}

export default FeedbackCardNoroff