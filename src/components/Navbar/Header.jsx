import React from 'react'

function Header() {
  return (
   <div className='w-full justify-center flex pt-8'>
    <div className='max-w-[1308px] flex justify-between  w-full  '>
        <div className='flex flex-row items-center'>
            <img src='/Home/logo.svg' className=' flex-shrink-0 h-[34.588px] ' />
            <span className='text-[30px] font-bold  tracking-[-0.681px] justify-center items-center pl-1 '>Cargo1</span>
        </div>
        <div className='flex flex-row  items-center'>
        <span className=' mr-[40px]'>Начало</span>
        <span className=' mr-[40px]'>За нас</span>
        <span className=' mr-[40px]'>Услуги</span>
        <span className=' mr-[40px]'>Цени</span>
        <span className=' mr-[40px]'>Как работи</span>
        <span>Контакти</span>

        </div>
        <div className='flex flex-row items-center '>
            <span className='mr-[34px]'>Профил</span>
            <button className=" rounded-xl px-[14px] py-[12px] border-2 border-black font-semibold">Заявка за пратка</button>
        </div>
    </div>

   </div>
  )
}

export default Header