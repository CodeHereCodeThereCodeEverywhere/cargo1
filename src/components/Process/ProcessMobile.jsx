import React from 'react'

function ProcessMobile() {
  let data = [
    {id:1,img:'/Home/icon.png',heading:"Информация за пратка",description:` Опишете размерите, количеството  и детайлите за вашите пратки за по-малко от 1 мин`,slog:"Започни сега"},
    {id:2,img:'/Home/icon.png',heading:"Информация за пратка",description:` Опишете размерите, количеството  и детайлите за вашите пратки за по-малко от 1 мин`,slog:"Започни сега"},
    {id:3,img:'/Home/icon.png',heading:"Информация за пратка",description:` Опишете размерите, количеството  и детайлите за вашите пратки за по-малко от 1 мин`,slog:"Започни сега"},
  ]
  return (
    <div className=' justify-center   w-full bg-base-neutral  flex relative mt-[120px] 9-12:mt-[69px] '>
        <div className='max-w-[1296px]  w-full xl:h-[830px] phone:h-[1470px] sm:h-[990px] md:h-[990px] 9-12:h-[830px] flex flex-col'>
        <h1 className="font-space flex justify-center phone:w-full phone:text-[28px]  sm:text-[32px] md:text-[38px] 9-12:mt-[89px] 9-12:text-[40px]   xl:justify-start md:justify-center  phone:mt-2 sm:mt-4  xl:mt-[89px]   xl:text-[48px] xl:pl-2     font-semibold leading-[115px] ">
            Как работи услугата
        </h1>
        <div className='grid xl:mt-[89px] xl:items-center  grid-cols-1 sm:justify-between sm:grid-cols-2  6-9:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 place-items-center'>
            {data.map((item) => (
              <div className=' bg-white rounded-md xl:w-full max-w-[416px] h-[394px] grid mt-4 '>
              <img src={item.img} className="phone:pt-[4vh] phone:pl-[2vw] sm:pt-[4vh] sm:pl-[4vh]" />
                  <h1 className="  px-4 font-semibold leading-[140%] text-[24px] phone:text-[20px] ">{item.heading}</h1>
                  <span className=" phone:text-[16px] px-4 text-[18px] font-normal leading-[170%] max-w-[311px]">
                      {item.description}
                  </span>
                  <a href="/">
                  <span className=" px-4 max-w-[140px] text-[16px] font-inter font-semibold">
                      {item.slog}
                  </span>
                  </a>
                  
              </div>
            ))}
          
        </div>
        

        </div>
        
    </div>
  )
}

export default ProcessMobile