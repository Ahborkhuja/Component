import React from 'react'
import Image from 'next/image'
import star from '../../public/rating-star.svg';
import movie from '../../public/megan.jpg';

function Movie() {
  return (
    <>
      <div className="relative p-4 w-full bg-black text-white flex">
        <div className="">
          <div className="mb-5 flex flex-col itesm-center gap-3">
            <iframe src="https://www.youtube.com/embed/BRb4U99OU80" className='h-80' title="M3GAN - official trailer" frameborder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className=" flex flex-col gap-2">
              <h6 className='text-2xl'>MEGAN</h6>
              <div className="text-ss font-bold flex items-center gap-1">Драма | Январь 2023 | 18+ <div className="text-sx pl-4 pr-4 border-2 border-[#27b881] rounded-full">2:28</div>
              </div>
              <div className="flex gap-1 items-center">
                <p>6.4</p>
                <Image src={star} alt='' width={15} />
              </div>
              <button type='button' className='p-3 w-48 rounded-xl bg-tranparent border-2 border-[#27b881] focus:bg-[#27b881]'>Сеансы</button>
            </div>
          </div>
          <div className="">
            <h2 className='text-2xl mb-4 font-bold'>Описание</h2>
            <p className='w-4/6'>Первостепенной задачей новой "подружки" является защита ребёнка от всевозможного физического и морального вреда,и Megan понимает это слишком буквально.</p>
          </div>
        </div>
        <div className="absolute right-0 top-56 p-2">
          <div className="w-12 h-14 bg-center bg-cover bg-[url('../../public/arrowRight1.svg')]"></div>
        </div>
      </div>
    </>
  )
}

export default Movie