import { useState } from "react"
import arrowL from "../../public/leftArrow.svg";
import Image from 'next/image'
import MovieList from "@/Components/MovieList";
import Card from "@/Components/Card";



// import movie from '../../public/movie.svg';
// import search from '../../public/search.svg';
// import wallet from '../../public/wallet.svg';
// import contact from '../../public/contacts.svg';
// import ButtonGroup from "@/Components/ButtonGroup";
// import Button from "@/Components/Button";
export default function Home() {
  // const [bool, setBool] = useState([true, false, false, false]);
  return (
    <>
      {/* <ButtonGroup className="bg-gray-800 p-3 gap-2 rounded-2xl">
        <Button img={movie} text='Главная' onclick={()=>{setBool([true,false,false,false])}} bool={bool[0]}></Button>
        <Button img={search} text='Поиск' onclick={()=>{setBool([false,true,false,false])}} bool={bool[1]}></Button>
        <Button img={wallet} text='Кошелек' onclick={()=>{setBool([false,false,true,false])}} bool={bool[2]}></Button>
        <Button img={contact} text='Аккаунт' onclick={()=>{setBool([false,false,false,true])}} bool={bool[3]}></Button>
      </ButtonGroup> */}

      <div className="w-full h-full bg-black ">
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
      </div>
    </>
  )
}


