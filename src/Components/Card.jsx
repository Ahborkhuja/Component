import React from 'react'
import classnames from "classnames";
import arrowR from "../../public/arrowRight.svg";
import Image from 'next/image'
const movieStyle = "inset-0 h-56 w-11/12 rounded-xl bg-cover bg-center";
const text = 'border-2 bg-transparent w-10 h-10 border-main text-white pl-2 pr-2 pt-1 pb-1 rounded-full flex justify-center items-center text-center';

function Card({ movieName, ticketCount, movieTime, ageRestriction, day, month, place }) {
  return (
    <>
      <div className={classnames(`relative bg-[url('https://keithandthemovies.files.wordpress.com/2022/10/megan.png')]`, movieStyle)} >
        <div className="absolute bottom-0 bg-black opacity-90 w-full h-16 flex justify-between items-center gap-5 p-2">
          <div className="flex justify-between items-center gap-3 ml-2">
            <div className="text-white">
              <div className="text-xl font-bold">{movieName}</div>
              <div className="text-sx">
                {ticketCount}-билета | {place} Cinema | {ageRestriction}
                .
              </div>
            </div>
            <div className={classnames(text,"text-xs")}><p> {day} <br /> {month}</p></div>
            <div className={classnames(text,"text-sx")}>{movieTime}</div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <button type="button" className="border-0 focus:bg-green-900 rounded-full ">
              <Image src={arrowR} width={30} alt="" />
            </button>
            <button type="button" className="border-2 border-main text-white pl-2 pr-2 pt-1 pb-1 text-sm rounded focus:bg-green-900">
              Показать QR
            </button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Card