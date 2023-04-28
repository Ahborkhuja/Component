import Image from 'next/image'
import React from 'react'
import Rarrow from '../../public/arrowRight1.svg';
import classnames from "classnames";
import playIcon from '../../public/play.svg'
const movieStyle = "inset-0 h-56 m-7 rounded-xl bg-cover bg-center";
const text = 'border-2 bg-transparent border-main text-white pl-3 pr-3 rounded-full flex justify-center items-center text-center';
function NowPlaying({ movieName, movieTime, year, month }) {
  return (
    <>
      <div className="pl-4 pt-3 pr-4 bg-black">
        <div className="m-5 flex justify-between items-center text-white text-2xl">Сейчас в кино
          <Image src={Rarrow} alt='' width={50} />
        </div>
        <div className={classnames(`relative bg-[url('https://keithandthemovies.files.wordpress.com/2022/10/megan.png')]`, movieStyle)} >
          <div className="absolute bottom-0 bg-black rounded-xl opacity-80 w-full h-16 flex justify-between items-center gap-5 p-2">
            <div className="flex justify-between items-center  gap-3 ml-2">
              <div className="text-white flex gap-2">
                <Image className='-ml-4' src={playIcon} alt='' width={100} />
                <div className="">
                  <div className="text-xl -mt-1 font-bold">{movieName}</div>
                  <div className="flex justify-between items-center w-full gap-5 font-bold">
                    <div className="-mt-2">{month} {year}</div>
                    <div className={classnames(text, "-mt-2 text-ss")}>{movieTime}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <button type="button" className="border-2 border-main text-white pl-2 pr-2 pt-1 pb-1 text-[0.8rem] rounded focus:bg-green-900">
                Уведомить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default NowPlaying