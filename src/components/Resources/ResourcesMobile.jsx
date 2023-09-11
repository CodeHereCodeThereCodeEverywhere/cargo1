import React from 'react'

function ResourcesMobile() {
    let  props = [
        {
            id:1,
            img:"/Home/Resource/resourcePicture.png",
            tag:"Онлайн магазини",
            h4:"6 съвета как да намалим разходите си за пратки",
        },
        {
            id:2,
            img:"/Home/Resource/resourcePicture.png",
            tag:"Онлайн магазини",
            h4:"6 съвета как да намалим разходите си за пратки",
        },
        {
            id:3,
            img:"/Home/Resource/resourcePicture.png",
            tag:"Онлайн магазини",
            h4:"6 съвета как да намалим разходите си за пратки",
        },
    
    ]
  return (
    <div className=' justify-center  xl:mt-[104px]  w-full   flex relative '>
         <div className='max-w-[1296px]  w-full h-fit flex flex-col'>
        <h1 className="font-space flex justify-center phone:w-full phone:text-[28px]  sm:text-[32px] md:text-[38px] 9-12:mt-[89px] 9-12:text-[40px]    md:justify-center  phone:mt-2 sm:mt-4  xl:mt-[89px]   xl:text-[48px] xl:pl-2     font-semibold leading-[115px] ">
            Полезни ресурси
        </h1>
        <div className='grid mt-[51px] 6-9:width-[45vw] phone:mt-2 xl:items-center  grid-cols-1 sm:justify-between sm:grid-cols-2  6-9:grid-cols-2 9-12:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 place-items-center '>
           {props.map((item) => (
             <div className='grid max-w-[416px] 6-9:w-[45vw] max-h-[454px]  mt-12 phone:px-2'>
             <img src="/Home/Resource/resourcePicture.png" className='rounded-md ' />
             <span className="bg-base-neutral  px-[12px] py-[7px] rounded-md mt-[30px]  max-w-10  phone:text-[12px] text-[14px] font-inter font-semibold  leading-[22px] w-fit">Пратки</span>
             <h4 className=" font-space mt-[20px] pr-[12px] phone:text-[20px] text-[24px] font-semibold   leading-[140%] max-w-[390px]">Как да пазаруваме от Amazon в Германия </h4>
             </div>
           ))}
        </div>
        </div>
    </div>
  )
}

export default ResourcesMobile