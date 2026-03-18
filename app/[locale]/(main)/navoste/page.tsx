import Button from '@/components/Button'
import HeroHeader from '@/components/HeroHeader'
import {  IconArrowRight, PapularLikeIcon, PapularShopIcon } from '@/public/icons'
import Image from 'next/image'
import Link from 'next/link'

const Navoste = () => {
  return (
   <section className='relative overflow-hidden'> 

      <Image src={"/images/bludaimg_chap.png"} alt="leaf" width={250} height={250} className="absolute top-[10%] -left-20 rotate-[-25deg] opacity-80 z-0 pointer-events-none blur-[1px]" />
      <Image src={"/images/bludaimg_chap.png"} alt="leaf" width={180} height={180} className="absolute top-[35%] -right-10 rotate-45 opacity-70 z-0 pointer-events-none" />
      <Image src={"/images/bludaimg_chap.png"} alt="leaf" width={220} height={220} className="absolute bottom-[20%] -left-10 rotate-15 opacity-85 z-0 pointer-events-none blur-[2px]" />
      <Image src={"/images/bludaimg_ong.png"} alt="leaf" width={150} height={150} className="absolute bottom-[5%] right-10 rotate-[-15deg] opacity-60 z-0 pointer-events-none" />
   
        <div className='containers relative z-10 p-15 hero-bg rounded-[50px] '>
            <HeroHeader/>
        <div className="flex items-center text-sm font-normal w-2xl">
        <Link href="/" className="text-gray-500 hover:text-black transition-colors duration-200">Главная</Link>
            <span className="mx-2 text-gray-400">›</span>
             <span className="text-gray-500 cursor-pointer font-medium hover:text-black transition-colors duration-200">Новости</span>
        </div>
             <div className="relative z-10 p-13.75 items-center ">
            <h2 className="text-center text-[48px] font-extrabold mb-35.75">Новости</h2>
            <ul className=" grid grid-cols-3  gap-y-35 justify-items-center mx-auto w-full gap-27.5">
              <li className="relative w-90 gallery-bg pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                   <div className="absolute -top-20 left-2">
                        <Image src={"/images/Galariya.png"}  alt="img"  width={213}  height={157}  className="rounded-[20px] left-3"/>
                    </div>
                    <p className="mt-4 mb-4 text-[16px] leading-relaxed text-left w-full">
                       Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.
                       </p>

                       <div className="flex items-center gap-3.25 w-full justify-start">
                         <Image src={"/images/Avatar.png"} alt="IMg" width={45} height={45} className="rounded-full" />
                            <strong>Сергей</strong>
                         </div>
                        </li>
                    <li className="relative w-90 gallery-bg pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                   <div className="absolute -top-20 left-2">
                        <Image src={"/images/Galariya.png"}  alt="img"  width={213}  height={157}  className="rounded-[20px] left-3"/>
                    </div>
                    <p className="mt-4 mb-4 text-[16px] leading-relaxed text-left w-full">
                       Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.
                       </p>

                       <div className="flex items-center gap-3.25 w-full justify-start">
                         <Image src={"/images/Avatar.png"} alt="IMg" width={45} height={45} className="rounded-full" />
                            <strong>Сергей</strong>
                         </div>
                        </li>
                 <li className="relative w-90 gallery-bg pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                   <div className="absolute -top-20 left-2">
                        <Image src={"/images/Galariya.png"}  alt="img"  width={213}  height={157}  className="rounded-[20px]"/>
                    </div>
                    <p className="mt-4 mb-4 text-[16px] leading-relaxed text-left w-full">
                       Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.
                       </p>

                       <div className="flex items-center gap-3.25 w-full justify-start">
                         <Image src={"/images/Avatar.png"} alt="IMg" width={45} height={45} className="rounded-full" />
                            <strong>Сергей</strong>
                         </div>
                        </li>
                          <li className="relative w-90 gallery-bg pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                   <div className="absolute -top-20 left-2">
                        <Image src={"/images/Galariya.png"}  alt="img"  width={213}  height={157}  className="rounded-[20px] left-3"/>
                    </div>
                    <p className="mt-4 mb-4 text-[16px] leading-relaxed text-left w-full">
                       Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.
                       </p>

                       <div className="flex items-center gap-3.25 w-full justify-start">
                         <Image src={"/images/Avatar.png"} alt="IMg" width={45} height={45} className="rounded-full" />
                            <strong>Сергей</strong>
                         </div>
                        </li>
                    <li className="relative w-90 gallery-bg pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                   <div className="absolute -top-20 left-2">
                        <Image src={"/images/Galariya.png"}  alt="img"  width={213}  height={157}  className="rounded-[20px] left-3"/>
                    </div>
                    <p className="mt-4 mb-4 text-[16px] leading-relaxed text-left w-full">
                       Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.
                       </p>

                       <div className="flex items-center gap-3.25 w-full justify-start">
                         <Image src={"/images/Avatar.png"} alt="IMg" width={45} height={45} className="rounded-full" />
                            <strong>Сергей</strong>
                         </div>
                        </li>
                 <li className="relative w-90 gallery-bg pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                   <div className="absolute -top-20 left-2">
                        <Image src={"/images/Galariya.png"}  alt="img"  width={213}  height={157}  className="rounded-[20px]"/>
                    </div>
                    <p className="mt-4 mb-4 text-[16px] leading-relaxed text-left w-full">
                       Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.
                       </p>

                       <div className="flex items-center gap-3.25 w-full justify-start">
                         <Image src={"/images/Avatar.png"} alt="IMg" width={45} height={45} className="rounded-full" />
                            <strong>Сергей</strong>
                         </div>
                        </li>
                            <div className="flex gap-2 mt-0.5 mx-auto w-fit">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 bg-white/50 text-sm font-semibold cursor-pointer shadow-sm">1</div>
                            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 hover:bg-white/30 text-sm cursor-pointer transition-colors">2</div>
                            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 hover:bg-white/30 text-sm cursor-pointer transition-colors">3</div>
                            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 hover:bg-white/30 text-sm cursor-pointer transition-colors">4</div>
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#8b7e7e] text-white text-xs font-bold"> ... </div>
                            <div className="w-10 h-10 flex items-center justify-center text-2xl font-light hover:translate-x-1 cursor-pointer transition-transform"> ›</div>
                      </div>
            </ul>
        </div>
        <div>
           <h2 className="text-center text-[48px] font-extrabold mb-35.75">Галерея</h2>
              <div>
                   <ul className=" grid grid-cols-4  gap-y-35 gap-x-10 gap-3.5 justify-items-center mx-auto w-full">
              <li className="relative w-90  pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                   <div className="absolute -top-20 left-2">
                        <Image src={"/images/Galariya.png"}  alt="img"  width={273}  height={185}  className="rounded-[20px] left-3"/>
                    </div>
                   
                        </li>
                    <li className="relative w-90  pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                   <div className="absolute -top-20 left-2">
                        <Image src={"/images/Galariya.png"}  alt="img"  width={273}  height={185}  className="rounded-[20px] left-3"/>
                    </div>
                  
                        </li>
                 <li className="relative w-90  pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                   <div className="absolute -top-20 left-2">
                        <Image src={"/images/Galariya.png"}  alt="img"  width={273}  height={185}  className="rounded-[20px]"/>
                    </div>
                    
                        </li>
                         <li className="relative w-90  pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                   <div className="absolute -top-20 left-2">
                        <Image src={"/images/Galariya.png"}  alt="img"  width={273}  height={185}  className="rounded-[20px]"/>
                    </div>
                    
                        </li>
                         <li className="relative w-90  pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                   <div className="absolute -top-20 left-2">
                        <Image src={"/images/Galariya.png"}  alt="img"  width={273}  height={185}  className="rounded-[20px]"/>
                    </div>
                    
                        </li>
                          <li className="relative w-90  pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                   <div className="absolute -top-20 left-2">
                        <Image src={"/images/Galariya.png"}  alt="img"  width={273}  height={185}  className="rounded-[20px] left-3"/>
                    </div>
                   
                        </li>
                    <li className="relative w-90  pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                   <div className="absolute -top-20 left-2">
                        <Image src={"/images/Galariya.png"}  alt="img"  width={273}  height={185}  className="rounded-[20px] left-3"/>
                    </div>
                   
                        </li>
                 <li className="relative w-90  pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                   <div className="absolute -top-20 left-2">
                        <Image src={"/images/Galariya.png"}  alt="img"  width={273}  height={185}  className="rounded-[20px]"/>
                    </div>
                   
                        </li>
                            <div className="flex gap-2 mt-0.5 mx-auto w-fit">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 bg-white/50 text-sm font-semibold cursor-pointer shadow-sm">1</div>
                            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 hover:bg-white/30 text-sm cursor-pointer transition-colors">2</div>
                            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 hover:bg-white/30 text-sm cursor-pointer transition-colors">3</div>
                            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 hover:bg-white/30 text-sm cursor-pointer transition-colors">4</div>
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#8b7e7e] text-white text-xs font-bold"> ... </div>
                            <div className="w-10 h-10 flex items-center justify-center text-2xl font-light hover:translate-x-1 cursor-pointer transition-transform"> ›</div>
                      </div>
            </ul>
              </div>
        </div>
          </div>
    </section>
  )
}

export default  Navoste