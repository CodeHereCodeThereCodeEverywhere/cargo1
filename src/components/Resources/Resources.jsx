import React from 'react'


function Resources() {
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
    <section className="flex justify-center   h-[830px]  sm:h-[1470px] md:h-[1030px] xl:h-[830px] w-full mt-[116px] relative ">
    <div className=" max-w-[1296px] w-full   relative  flex  flex-col text-base-black">
        <h1 className=" sm:flex justify-center  sm:w-full top-0 absolute xl:text-[48px]   sm:text-[32px] font-space font-semibold leading-[115px] ">
        Полезни ресурси
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:w-full sm:items-center sm:justify-items-center relative gap-[24px]  sm:top-[140px] xl:top-[283px] ">
        {props.map((item) => (
         <div className="grid mt-[24px]">
         <img src={item.img} className="rounded-xl max-w-[416px] max-h-[300px]"/>
         <span className="bg-base-neutral px-[12px] py-[7px] rounded-md mt-7 relative max-w-10  text-[14px] font-inter font-semibold  leading-[22px] w-fit">{item.tag}</span>
         <h4 className="relative top-7 text-[24px] font-semibold  font-space leading-[140%] max-w-[390px]">{item.h4}</h4>
     </div>
     ))}    
            
        </div>
    </div>

</section>
  )
}

export default Resources

{/* <section className=" w-full h-[587px] justify-center  flex mt-[105px] ">
<div className="max-w-[1296px] w-full  max-h-[587px] justify-center items-center relative flex flex-col ">
<h1 className=" -top-8 absolute xl:text-[48px]   sm:text-[32px] font-space font-semibold leading-[115px] ">
 Полезни ресурси
       </h1>
 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 top-8 gap-[24px] relative w-full">
     {props.map((item) => (
         <div className="grid">
         <img src={item.img} className="rounded-xl max-w-[416px] max-h-[300px]"/>
         <span className="bg-[#F0F5F4] px-[12px] py-[7px] rounded-md mt-7 relative max-w-10  text-[14px] font-inter font-semibold  leading-[22px] w-fit">{item.tag}</span>
         <h4 className="relative top-7 text-[24px] font-semibold  font-space leading-[140%] max-w-[390px]">{item.h4}</h4>
     </div>
     ))}     

 </div>
</div>

</section> */}