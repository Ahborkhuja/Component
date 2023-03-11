import { useState } from "react"
import movie from '../../public/movie.svg';
import search from '../../public/search.svg';
import wallet from '../../public/wallet.svg';
import contact from '../../public/contacts.svg';
import ButtonGroup from "@/Components/ButtonGroup";
import Button from "@/Components/Button";
export default function Home() {
  const [bool, setBool] = useState([true,false,false,false]);
  return (
    <>
      <ButtonGroup className="bg-gray-800 p-3 gap-2 rounded-2xl">
        <Button img={movie} text='Главная' onclick={()=>{setBool([true,false,false,false])}} bool={bool[0]}></Button>
        <Button img={search} text='Поиск' onclick={()=>{setBool([false,true,false,false])}} bool={bool[1]}></Button>
        <Button img={wallet} text='Кошелек' onclick={()=>{setBool([false,false,true,false])}} bool={bool[2]}></Button>
        <Button img={contact} text='Аккаунт' onclick={()=>{setBool([false,false,false,true])}} bool={bool[3]}></Button>
      </ButtonGroup>
    </>
  )
}


