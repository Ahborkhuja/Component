import classnames from "classnames";

const style = "relative px-1 py-1 w-36 text-center border-2 border-[#27b881] bg-transparent text-base leading-5 font-medium text-white focus:z-10 active:bg-green-300 focus:rounded-full transition ease-in-out duration-500 rounded-full gap-1";
const focusStyle = 'focus:border-green-400 focus:bg-green-800 focus:shadow-outline-green focus:outline-none focus:border-2'
function SeansButton({ text }) {

  return (
    <>
      <div className="p-1 flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <button className={classnames(style, focusStyle)}>Кинотеатр</button>
          <button className={classnames(style, focusStyle)}>Время</button>
          <button className={classnames(style, focusStyle)}>Расстояние</button>
          <button className={classnames(style, focusStyle)}>Типо</button>
        </div>
        <div className="text-white flex gap-5 text-main">
          <span> Сегодня </span> |
          <span> 21 Января </span> |
          <span> 22 Января </span> |
          <span> 23 Января </span>
        </div>
      </div>
    </>
  )
}

export default SeansButton