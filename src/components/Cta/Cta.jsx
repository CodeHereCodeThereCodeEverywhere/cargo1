import React, { useState } from 'react'

function Cta() {
    const [phone,setPhone] = useState('')
  return (
    <div className="w-full    bg-base-blue h-[602px] justify-center  mt-[115px] flex">
        <div className="max-w-[700px] w-full max-h-[368px] flex justify-center  flex-col  mt-[100px] ">
            <h1 className="text-white font-space text-[72px] phone:text-[52px] font-semibold text-center leading-[100%] ">Готово ли сте да работим заедно?</h1>
            <h2 className=" text-white text-center max-w-[684px] font-inter font-normal phone:text-[16px] text-[20px] mt-[24px] flex ">Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси</h2>
            <div className="flex flex-row justify-center mt-[46px]">
                <form  className="text-[16px] font-inter leading-[24px] " >
                    <input type="tel"
                     minLength="12" 
                     required id="" 
                     placeholder="Мобилен телефон" 
                     className=" rounded-bl-md rounded-tl-md  phone:p-[10px] px-[20px] py-[20px] w-fit" onChange={(e) => setPhone(e.target.value)} value={phone} />
                    <button className=" phone:p-[10px] px-[20px] py-[20px] w-fit bg-base-green rounded-tr-md rounded-br-md text-base-black ">Изпрати</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Cta