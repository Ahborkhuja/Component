import React from 'react'
import Image from 'next/image'
import sum from '../../public/sumSymb.svg'
import card from '../../public/Card.svg'

import Humo from "../../public/Humo.jpg";
import Click from "../../public/Click.jpg";
import PayMe from "../../public/payme.jpg";
import Uzcard from "../../public/uzard.jpeg";

function Checkout() {
  return (
    <>
      <div className="w-full flex flex-col gap-10  text-white  bg-black p-3">
        <div className="border-l-[2px] w-2/3 border-[#27b881] pl-3 mt-5">
          <div className=' text-2xl font-bold uppercase'>Megan</div>
          <p className='text-[1.2rem]'>NEXT Cinema | Малый зал N4</p>
          <div className="mt-5 mb-10 flex flex-col gap-2">
            <div className='text-ss flex justify-between'>Место N45<div className="flex gap-2"><Image src={sum} alt='' width={15} /> 55 000</div></div>
            <div className='text-ss flex justify-between'>Место N55<div className="flex gap-2"><Image src={sum} alt='' width={15} /> 55 000</div></div>
            <div className='text-ss flex justify-between'>Место N44<div className="flex gap-2"><Image src={sum} alt='' width={15} /> 55 000</div></div>
          </div>
          <div className='text-[1.3rem] flex justify-between font-bold'>Итого: <div className="flex text-[1.2rem]"> <Image src={sum} alt='' width={15} />165 000</div></div>
        </div>
        <div className="flex justify-center">
          <Image src={card} alt='' width={350} />
        </div>
        <div className="p-5 flex justify-between flex-wrap gap-2">
          <button className='border-2 bg-[#151515] text-[1.4rem] overflow-hidden flex items-center rounded-lg gap-6 w-64 h-20 border-[#27b881] focus:bg-[#00935c]'>
            <Image src={Humo} alt='' className='m-1 rounded-xl' width={100} />
            Humo
          </button>
          <button className='border-2 bg-[#151515] text-[1.4rem] overflow-hidden flex items-center rounded-lg gap-6 w-64 h-20  border-[#27b881] focus:bg-[#00935c]'>
            <Image src={Uzcard} alt='' className='m-1 overflow-hidden rounded-xl' width={100} />
            Uzcard
          </button>
          <button className='border-2 bg-[#151515] text-[1.4rem] overflow-hidden flex items-center rounded-lg gap-6 w-64 h-20 border-[#27b881] focus:bg-[#00935c]'>
            <Image src={Click} alt='' className='m-1 rounded-xl' width={70} />
            CLICK
          </button>
          <button className='border-2 bg-[#151515] text-[1.4rem] overflow-hidden flex items-center rounded-lg gap-6 w-64 h-20  border-[#27b881] focus:bg-[#00935c]'>
            <Image src={PayMe} alt='' className='m-1 overflow-hidden rounded-xl' width={70} />
            Payme
          </button>
        </div>
      </div>
    </>
  )
}

export default Checkout