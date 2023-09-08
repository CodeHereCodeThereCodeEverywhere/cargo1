import React from 'react'

function Hero() {
  return (
    <div className='mt-[113px] w-full justify-center flex '>
        <div className='max-w-[1296px] grid grid-cols-2 w-full max-h-[554px]'>
            <div className='max-w-1/2 relative '>
                <h1 className='text-left text-[72px] font-semibold leading-[108%] '>
                Доставки и транспорт на <span className='underline underline-offset-auto'>онлайн поръчки </span>
                </h1>
                <h2 className='text-left text-[20px] font-normal leading-[170%] pt-[24px] max-w-[599px]'>
                Сигурни доставки в Европа и Турция с доверен партньор и<br /> 10  години доверие от нашите клиенти
                </h2>
                <div className='flex flex-row items-center mt-[40px] '>               
                <button className='p-[20px]  border rounded-xl bg-slate-900 border-slate-900 text-white mr-[20px]  whitespace-nowrap'>Подгответе пратка онлайн</button>
                <button className='p-[20px]  border border-black rounded-xl whitespace-nowrap text-[16px] font-semibold'>Транспорт на  контейнери</button>
                </div>

            </div>
            <div className='w-1/2 relative flex z-0'>
            <img src='/Home/hero.png' className='   top-0 right-[45px] flex ml-20  max-w-[522px] z-10' />
            <img src='/Home/review.png' className='top-0 right-0 absolute max-w-[324px] max-h-[198px] z-20' />
            <img src='/Home/chart.png'  className=' bottom-0 right-0 absolute max-w-[324px] max-h-[198px] z-20'/>
            <img src='/Home/Blur.png' className='z-0   '/>
            </div>
        </div>
        
    </div>
  )
}

export default Hero