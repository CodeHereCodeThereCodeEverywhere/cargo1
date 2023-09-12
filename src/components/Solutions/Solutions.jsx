import React from 'react'

function Solutions() {
    const text = [
        {
            id:1,
            heading:"Цели и частични товари",
            description:"Товарно пространство в 120 града, Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме услуги за всички видове бизнес"

        },
        {
            id:2,
            heading:"Опасни товари (ADR)",
            description:"Поради риска, който представляват за хората и околната среда, опасните товари не могат да бъдат третирани като общи товари."

        },
        {
            id:3,
            heading:"Хладилен транспорт",
            description:"Транспортиране на бързоразвалящи се или замразени стоки, които имат кратък срок на годност при обикновена температура."

        },
        {
            id:4,
            heading:"Документи и колети",
            description:"Доставка на колетни пратки от ТУРЦИЯ – Пазарауване от всички онлайн платформи!"

        },
        {
            id:5,
            heading:"Извънгабаритни товари",
            description:"Предлагаме вътрешен и международен автомобилен транспорт в цяла Европа, и Турция."

        },
    ]
  return (
<div className=" w-full  justify-center flex">
    <div className="max-w-[1296px] max- w-full ">
    <h1 className="font-space flex justify-center text-center phone:w-full phone:text-[28px]  sm:text-[32px] md:text-[38px] 9-12:mt-[89px] 9-12:text-[40px]    md:justify-center  phone:mt-2 sm:mt-4  xl:mt-[89px]   xl:text-[48px] xl:pl-2     font-semibold leading-[115%] ">
            Услуги и <br /> бизнес решения
        </h1>
    <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[1032px] lg:py-16 lg:flex-row    ">
<div class="flex items-center justify-center w-full h-96 lg:max-w-1/2  ">
            <img class=" w-full h-full max-w-2xl top-0" src="/Home/Solutions/Vector.png"/>
        </div>
        <div class="w-full lg:max-w-[456px] md:pl-[80px] xl:pl-[120px] flex flex-col fill-inherit bg-inherit phone:mt-12 ">
          {text.map((item) => (
              <div class="lg:max-w-lg flex flex-row justify-start phone:mt-12 mt-[30px]">              
                <div>
                <span className="mr-[30px] rounded-full bg-base-green py-1 px-3 justify-center items-center flex font-semibold">1</span>
                </div>

                <div class="flex flex-col">
                <h1 className="font-space text-[24px] font-semibold leading-[140%] -mt-0.25">Цели и частични товари</h1>
                <h2 className="font-inter text-[16px] leading-[170%] mt-[30px]">Товарно пространство в 120 града, Фокусът ни върху клиентите e същността на нашата работа. Ние доставяме услуги за всички видове бизнес</h2>
              </div>
              
                          
                              
           
          </div>
          ))}
            
            
        </div>

        
    </div>
    </div>
</div>
  )
}

export default Solutions



