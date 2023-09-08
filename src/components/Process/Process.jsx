import React from "react";

function Process() {
  return (
    <div className="w-full bg-[#F0F5F4] h-[830px] mt-[116px] flex justify-center">
      <div className="w-[1296px]  bg-neutral-200 relative border">
        <h1 className="w-[456px] h-[55px] bg-neutral-500 rounded-xl top-[139px] absolute "></h1>
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 gap-[24px] ">
          <div className="w-[416px] h-[394px] bg-white rounded-xl mt-[283px] grid relative">
            <img src='/Home/icon.png'  className="absolute top-[40px] left-[40px]"/>
            <h1 className="top-[146px] left-[40px] font-semibold leading-[140%] text-[24px] absolute"> Информация за пратка</h1>
            <span className="absolute top-[198px] left-[40px] text-[18px] font-normal leading-[170%] max-w-[311px]">
            Опишете размерите, количеството <br /> и детайлите за вашите пратки за <br />по-малко от 1 мин
            </span>
            <span className="absolute left-[40px] top-[323px] bg-neutral-400 w-[140px] h-[16px]">
            
            </span>
          </div>
          <div className="max-w-[416px] max-h-[394px] bg-white rounded-xl mt-[283px] grid"></div>
          <div className="max-w-[416px] max-h-[394px] bg-white rounded-xl  mt-[283px] grid  "></div>
          
        </div>
      </div>
    </div>
  );
}

export default Process;
