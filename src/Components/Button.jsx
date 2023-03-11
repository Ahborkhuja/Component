import Image from 'next/image'
import classnames from "classnames";

const style= "relative inline-flex items-center px-2 py-2 border-2 border-transparent bg-transparent text-sm leading-5 font-medium text-white focus:z-10 active:bg-green-300 focus:rounded-2xl transition ease-in-out duration-500 rounded-2xl gap-1";
const focusStyle='focus:border-green-400 focus:bg-green-800 focus:shadow-outline-green focus:outline-none focus:border-2'
const Button = ({img,text,onclick,bool})=>{
  return(
    <>
        <button onClick={onclick} className={classnames(style,bool&&focusStyle)}>
        <Image src={img} width={20} />
        {bool && text}
        </button>
    </>
  )
}
export default Button;