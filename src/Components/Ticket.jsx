import arrowL from "../../public/leftArrow.svg";
import ticket from "../../public/ticket.svg";
import Image from 'next/image'
import megan from '../../public/megan.jpg';
import QR from '../../public/QR.png';

function Ticket() {
  return (
    <>
    <div className="bg-black h-full">
      <button type="button" className="border-0 bg-transparent mt-2 ml-3 mb-20 rounded-full focus:bg-green-900">
        <Image src={arrowL} width={50} alt='' />
      </button>
      <div className="flex text-white justify-center flex-col  items-center">
        <div className="p-3 relative rounded-xl w-96 h-full mt-5 ">
          <div className="flex z-10 flex-col gap-16 font-bold items-center">
          <Image src={ticket} alt="" width={600} height={900} className="absolute -mt-10 z-0" />
            <Image className='-mt-12 rounded-xl z-10' src={megan} alt="" width={150} height={60} />
            <Image src={QR} alt="" />
          </div>
          <div className="ml-20 text-left font-bold">
            <h3 className="text-2xl z-10 mb-0 font-bold">Megan</h3>
            <div className="text-[#8f8f8f] mt-0">
              <p className="z-10">Next Cinema | Зал N4 </p>
            </div>
          </div>
          <div className="mt-8 font-bold flex justify-center items-center gap-4 mb-6">
            <span className="z-10 rounded-full border-0 w-16 h-16 bg-black text-center flex justify-center items-center text-ss ">21 <br /> Января</span>
            <p className="z-10 rounded-full border-0 w-16 h-16 bg-black text-center flex justify-center items-center text-base ">17 : 45</p>
            <span className="z-10 rounded-full border-0 w-16 h-16 bg-black text-center flex justify-center items-center text-ss ">2 Ряд <br />4B</span>
          </div>
        </div>
          <button type="button" className="text-black border-0 pt-2 pb-2 rounded-md bg-[#27b881] text-ss mb-20 font-bold" style={{width:"340px"}}> Показать код билета </button>
      </div>
    </div>
  </>
  )
}

export default Ticket