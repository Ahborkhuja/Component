import Butsea from "@/Components/SeansButton"
import Search from "@/Components/Search"

import NowPlaying from "@/Components/NowPlaying"

import Checkout from "@/Components/Checkout"
import Ticket from "@/Components/Ticket"

import Movie from "@/Components/Movie"
import classnames from "classnames";

import { useState } from "react"
import arrowL from "../../public/leftArrow.svg";
import Image from 'next/image'
import MovieList from "@/Components/MovieList";
import Card from "@/Components/Card";

import top from '../../public/wave.svg';
import bot from '../../public/waveT.svg';

import movie from '../../public/megan.jpg';
import search from '../../public/search.svg';
import wallet from '../../public/wallet.svg';
import contact from '../../public/contacts.svg';
import ButtonGroup from "@/Components/ButtonGroup";
import Button from "@/Components/Button";
import pointer from "../../public/pointer.svg";
import screen from "../../public/screen.svg";
import swiper from "../../public/swiper.png";
//  import Swiper from "@/Components/Swiper"

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css';

let leftSty = "text-transparent bg-clip-text bg-gradient-to-l from-gray-100 to-gray-700",
  rightSty = "text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-700";
let array = [
  {
    time: "17:30",
    seats: [],
  },
  {
    time: "19:30",
    seats: [],
  },
  {
    time: "21:00",
    seats: [],
  },
]
export default function Home() {
  const [bool, setBool] = useState([true, false, false, false]);
  const [arr, setarr] = useState([array[0].time, array[1].time, array[2].time]);
  const leftClick = () => {
    setarr(array[2].time, array[0].time, array[1].time)
  }
  const rightClick = () => {
    setarr(array[1].time, array[2].time, array[0].time)
  }
  const [check, setcheck] = useState(false);
  console.log(check);
  let change = () => {
    const a = document.querySelectorAll('.check');
    console.log(a);
    let checked = 0, notchecked = 0;
    a.forEach((value) => {
      if (value.checked) {
        checked++;
      } else {
        notchecked++
      }
    });
    console.log(checked + " = checked," + notchecked + " = Not checked");
  }
  const [showModal, setShowModal] = useState(false);

  return (
    <>

{/* <Swiper /> */}

      <div className="w-full h-[100vh] bg-gradient-to-l from-[#114121] to-[#000000] pt-10">
        <div className="flex justify-center  p-3">
          <h6 className='text-white text-2xl'>MEGAN</h6>
        </div>
        <div className="text-white" style={{ borderTop: "2px solid #374151" }}>
          <div className="">
            <ul className="flex justify-center gap-5  p-5">
              <li className={classnames("translate-y-7 -translate-x-3 text-main", leftSty)} onclick={leftClick} >{arr[0]}</li>
              <li className="text-xl">{arr[1]}</li>
              <li className={classnames("translate-y-7 translate-x-3 text-main", rightSty)} onclick={rightClick} >{arr[2]}</li>
            </ul>
          </div>
          <div className="flex justify-center align-top pb-10 ">
            <Image src={screen} alt="" />
          </div>
        </div>
        <div className="w-full flex justify-evenly">
          <div className="mr-auto ml-auto flex flex-wrap" onChange={change}>
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" checked disabled className="check w-7 h-7 disabled: appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
            <input type="checkbox" className="check w-7 h-7 appearance-none bg-[#121212] checked:bg-[#27b881] rounded m-1" />
          </div>
        </div>
        <div className="flex justify-center mt-5">

          <button type="button" className="w-10/12 rounded-xl p-2 bg-[#121212] backdrop-blur-md text-white" onClick={() => { setShowModal(true) }}>Забронировать</button>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="absolute w-100  my-6 mx-auto max-w-6xl bottom-0">
            <div className="border-0 h-[60vh] rounded-lg shadow-lg flex flex-col w-screen bg-transparent backdrop-blur-md outline-none focus:outline-none">
              <div className="p-4 w-100 flex justify-center">
                <span className="h-[1px] w-[41px] bg-white rounded-xl"></span>
              </div>
              <div className="flex p-3 justify-between text-white text-main">
              <p>
                x 12D <br />
                x 4C <br />
                x 5C <br />
              </p>
              <p>
                55 000 <br />
                60 000 <br />
                60 000 <br />
              </p>
              </div>
              <div className="flex pl-7 pr-7 justify-between text-white text-main">
                <p>Итог</p>
                <p>175 000</p>
              </div>
              <div className="absolute bottom-0 flex items-center justify-center p-4 w-full  rounded-2xl">
                <button
                  className="text-white bg-black px-6 py-2 text-ss w-10/12 backdrop-blur-md ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  К оплате  
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null
      }
      {/* <ButtonGroup className="bg-gray-800 p-3 gap-2 rounded-2xl">
        <Button img={movie} text='Главная' onclick={()=>{setBool([true,false,false,false])}} bool={bool[0]}></Button>
        <Button img={search} text='Поиск' onclick={()=>{setBool([false,true,false,false])}} bool={bool[1]}></Button>
        <Button img={wallet} text='Кошелек' onclick={()=>{setBool([false,false,true,false])}} bool={bool[2]}></Button>
        <Button img={contact} text='Аккаунт' onclick={()=>{setBool([false,false,false,true])}} bool={bool[3]}></Button>
      </ButtonGroup> */}
      {/* <div className="w-full h-full bg-black ">
        <button type="button" className="border-0 bg-transparent mt-2 ml-3 mb-20 rounded-full focus:bg-green-900">
          <Image src={arrowL} width={50} alt='' />
        </button>
        <MovieList className="p-2 gap-20 flex flex-wrap justify-center items-center">
          <Card
            movieName={'Megan'}
            ticketCount={2}
            movieTime={"17:45"}
            ageRestriction={'18+'}
            day={'21'}
            month={"января"}
            place={'Next'}
          />
           <Card
            movieName={'Megan'}
            ticketCount={2}
            movieTime={"17:45"}
            ageRestriction={'18+'}
            day={'21'}
            month={"января"}
            place={'Next'}
          />
        </MovieList>
      </div> */}

      {/* <div className="w-full p-2 bg-black text-left text-white gap-2 flex flex-col">
        <p className="text-[1.8rem]">Next Cinema</p>
        <p className="font-base font-bold">улица, район, город</p>
        <div className="flex justify-left gap-3 items-center">
          <div className="p-1 pl-4 pr-4 border-2 rounded-full border-[#27b881]">17:45</div>
          <div className="p-1 pl-4 pr-4 border-2 rounded-full border-[#27b881]">17:45</div>
          <div className="p-1 pl-4 pr-4 border-2 rounded-full border-[#27b881]">17:45</div>
        </div>
      </div>  */}

      {/* <Movie />*/}

      {/* <div className="bg-black w-full p-1 flex flex-col gap-4">
        <Search />
        <Butsea />
      </div> */}

      {/* <Ticket /> */}

      {/* <Checkout /> */}
      {/* <div className="bg-black p-3 w-max">
        <button className="rounded-full border-2 border-[#000000] pr-3 pl-3 gap-2 focus:border-[#27b881] focus:bg-green-900 w-full flex justify-left text-white items-center">
           <Image src={movie} alt="" width={20} />Главная</button>
        <button className="rounded-full border-2 border-[#000000] pr-3 pl-3 gap-2 focus:border-[#27b881] focus:bg-green-900 w-full flex justify-left text-white items-center"><Image src={search} alt="" width={20} />Поиск</button>
        <button className="rounded-full border-2 border-[#000000] pr-3 pl-3 gap-2 focus:border-[#27b881] focus:bg-green-900 w-full flex justify-left text-white items-center"><Image src={contact} alt="" width={20} />Мои билеты</button>
      </div> */}

      {/* <Movie /> */}
      {/* <ReactPlayer url={'https://www.youtube.com/embed/BRb4U99OU80'} onPlay={true} controls={true} onStart={true} /> */}
      {/* <NowPlaying
        movieName={'Megan'}
        month={'Март'}
        year={'2023'}
        movieTime={'12:28'} /> */}

    </>
  )
}


