import React from 'react'

function time() {
  return (
    <>
      <div className="w-36 rounded-2xl border-2 m-2 p-2 border-[#ffffff] flex flex-col items-center gap-2">
        <Image src={pointer} alt="" width={30} className="-m-2" />
        <div className="p-4">
          <div className="border-2 pl-4 pr-4 rounded-xl border-[#27b881] p-2 text-white text-center">17:45</div>
        </div>
      </div>
    </>
  )
}

export default time