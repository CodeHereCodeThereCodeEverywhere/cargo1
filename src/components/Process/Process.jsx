import React from "react";

function Process() {
  return (
   
    <section className="flex justify-center  bg-base-neutral h-[830px]  sm:h-[1470px] md:h-[1030px] xl:h-[830px] w-full mt-[116px] ">
    <div className=" max-w-[1296px] w-full   relative  flex  flex-col">
        <h1 className=" sm:flex sm:justify-center  md:justify-start sm:w-full sm:top-5 xl:top-[139px] absolute xl:text-[48px]   sm:text-[32px] font-space font-semibold leading-[115px] ">
            Как работи услугата
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:w-full sm:items-center sm:justify-items-center relative gap-[24px]  sm:top-[140px] xl:top-[283px] ">
            <div className="items-center  justify-center grid bg-white w-full max-w-[416px] h-[394px] rounded-xl relative">
                <img src='/Home/icon.png' className="absolute top-[40px] left-[40px]" />
                <h1 className="top-[146px] left-[40px] font-semibold leading-[140%] text-[24px] absolute"> Информация за пратка</h1>
                <span className="absolute top-[198px] left-[40px] text-[18px] font-normal leading-[170%] max-w-[311px]">
                    Опишете размерите, количеството <br /> и детайлите за вашите пратки за <br />по-малко от 1 мин
                </span>
                <span className="absolute left-[40px] top-[323px] max-w-[140px] text-[16px] font-inter font-semibold">
                    Започни сега
                </span>
            </div>
            <div className="items-center  justify-center grid bg-white w-full max-w-[416px] h-[394px] rounded-xl relative">
                <img src='/Home/icon.png' className="absolute top-[40px] left-[40px]" />
                <h1 className="top-[146px] left-[40px] font-semibold leading-[140%] text-[24px] absolute"> Информация за пратка</h1>
                <span className="absolute top-[198px] left-[40px] text-[18px] font-normal leading-[170%] max-w-[311px]">
                    Опишете размерите, количеството <br /> и детайлите за вашите пратки за <br />по-малко от 1 мин
                </span>
                <span className="absolute left-[40px] top-[323px] max-w-[140px] text-[16px] font-inter font-semibold">
                    Започни сега
                </span>
            </div>
            <div className="items-center justify-center grid bg-white w-full max-w-[416px] h-[394px] rounded-xl relative md:col-span-2   xl:col-span-1">
                <img src='/Home/icon.png' className="absolute top-[40px] left-[40px]" />
                <h1 className="top-[146px] left-[40px] font-semibold leading-[140%] text-[24px] absolute"> Информация за пратка</h1>
                <span className="absolute top-[198px] left-[40px] text-[18px] font-normal leading-[170%] max-w-[311px]">
                    Опишете размерите, количеството <br /> и детайлите за вашите пратки за <br />по-малко от 1 мин
                </span>
                <span className="absolute left-[40px] top-[323px] max-w-[140px] text-[16px] font-inter font-semibold">
                    Започни сега
                </span>
            </div>
        </div>
    </div>

</section>
  );
}

export default Process;
