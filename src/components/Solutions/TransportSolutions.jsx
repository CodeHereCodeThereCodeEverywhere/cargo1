import React from 'react'

function TransportSolutions() {
const props = {heading:
    {h1:"Tранспортни услуги за цяла Европа и част от Азия",h4:"Ние предлагаме надеждни транспортни услуги на нашите клиенти, осигурявайки връзките между фирми износители и вносители от Западна Европа. Основен предмет на дейност са спедиторски услуги по извършване на автомобилен превоз на товари."}
,stats:[
    {
        first:"24/7",second:"Поддържка"
    },
    {
        first:"30M+",second:"Глобални клиента"
    },
    {
        first:"860+",second:"Доставки"
    },

]}

  return (
    <div className=" w-full  justify-center flex">
    <div className="max-w-[1296px] max- w-full ">
    
    <div class="container flex flex-col px-2 py-10 mx-auto space-y-6 h-fit lg:py-16 lg:flex-row w-full    ">
<div class="flex items-center justify-center w-full h-96 lg:max-w-[583px] ">
            <img class="w-full " src="/Home/Solutions/vector-1.png"/>
        </div>
        <div class="w-full lg:max-w-[456px] text-left  flex flex-col fill-inherit bg-inherit phone:mt-12   ">
          
              <div class="lg:max-w-[583px] flex flex-col justify-start phone:mt-12  6-9:mt-[100px]">             
                <div class="flex flex-col">
                <h1 className="font-space text-[48px] phone:text-[32px]  leading-[115%] font-semibold -mt-0.25">{props.heading.h1}</h1>
                <h2 className="font-inter text-[16px] leading-[170%] mt-[30px]">{props.heading.h4}</h2>
              </div>
               <div className='grid xl:grid-cols-3 grid-cols-1 self-center'>
              {props.stats.map((item) => (
                 <div className='mt-[48px] phone:text-center'>
                 <h1 className='font-space text-[32px] font-semibold '>
                 {item.first}
                 </h1>
                 <h4 className='font-inter text-[16px] leading-[170%]'>
                 {item.second}
                 </h4>
              </div>
              ))}
                
               </div>
                          
                              
           
          </div>
          
            
            
        </div>

        
    </div>
    </div>
</div>
  )
}

export default TransportSolutions