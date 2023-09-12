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
    <div className="max-w-[1296px]  w-full flex ">
    
    <div class="container flex flex-col  py-10 mx-auto  space-y-6 h-fit lg:py-16 lg:flex-row w-full    ">
<div class="flex items-center justify-center w-full h-96 lg:max-w-[583px] xl:mt-[10vh] 6-9:mt-[12vh] ">
            <img class="w-full " src="/Home/Solutions/vector-1.png"/>
        </div>
        <div class="w-full lg:max-w-[456px]  text-left  flex flex-col fill-inherit bg-inherit   xl:mt-[10vh] 6-9:mt-[17vh] phone:mt-[10vh] xl:ml-[10vw]  ">
          
              <div class="lg:max-w-[583px] w-full phone:max-w-full flex flex-col justify-start   6-9:mt-[22vh] ">             
                <div class="flex flex-col">
                <h1 className="font-space text-[48px] phone:text-[32px]  leading-[115%] font-semibold -mt-0.25">{props.heading.h1}</h1>
                <h2 className="font-inter text-[16px] leading-[170%] mt-[30px]">{props.heading.h4}</h2>
              </div>
               <div className='grid grid-cols-3 '>
              {props.stats.map((item,index) => (
                 <div className='mt-[48px] ' key={index}>
                 <h1 className='font-space text-[32px] phone:text-[24px] font-semibold '>
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