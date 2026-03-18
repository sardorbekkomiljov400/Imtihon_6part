import Button from '@/components/Button'
import HeroHeader from '@/components/HeroHeader'
import {  IconArrowRight, PapularLikeIcon, PapularShopIcon } from '@/public/icons'
import Image from 'next/image'
import Link from 'next/link'

const  menu = () => {
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
             <span className="text-gray-500 cursor-pointer font-medium hover:text-black transition-colors duration-200"> Меню</span>
          </div>

               <div className=" max-w-7xl mx-auto">
            <h2 className="text-[48px] text-[#000000] text-center font-extrabold mb-50">Меню</h2>
                 <div className="absolute left-1/2 -translate-x-1/2 top-70 -mt-4 mb-20 p-6 ">
                      <ul className="flex gap-6 bg-white/40 backdrop-blur-md px-6 py-3 rounded-full shadow">
                          <li className="cursor-pointer">Первые</li>
                          <li className="cursor-pointer">Вторые</li>
                          <li className="cursor-pointer">Салаты</li>
                          <li className="cursor-pointer">Напитки</li>
                          <li className="cursor-pointer">Фаст-Фуд</li>
                       </ul>
      </div>
           <ul className="grid grid-cols-4 gap-6 mb-16 justify-items-center">
              <li className="relative mb-15" >
                <div className="hero-bg rounded-[38px] pt-40  p-7.5">
                    <Image className="absolute bottom-35 right-2" src={"/images/Papular-img.png"} alt="Img" width={243} height={243}/>
                    <strong className="flex items-center justify-between font-bold mb-1 text-[24px] text-[#000000]">Chicken soup <PapularLikeIcon/></strong>
                    <p className="text-[15px] text-[#000000] mb-1">Spicy with garlic</p>
                    <div className="flex items-end justify-between">
                        <strong className="font-bold text-[24px]  text-[#000000]">$10.00</strong>
                        <Button type="button" extraStyle="p-[12px] bg-[#000000] rounded-[5px]" icon={<PapularShopIcon/>} iconPost="left"/>
                    </div>
                  </div>
              </li>
                 <li className="relative  mb-15" >
                <div className="hero-bg rounded-[38px] pt-40  p-7.5">
                    <Image className="absolute bottom-35 right-2" src={"/images/Papular-img.png"} alt="Img" width={243} height={243}/>
                    <strong className="flex items-center justify-between font-bold mb-1 text-[24px] text-[#000000]">Chicken soup <PapularLikeIcon/></strong>
                    <p className="text-[15px] text-[#000000] mb-1">Spicy with garlic</p>
                    <div className="flex items-end justify-between">
                        <strong className="font-bold text-[24px]  text-[#000000]">$10.00</strong>
                        <Button type="button" extraStyle="p-[12px] bg-[#000000] rounded-[5px]" icon={<PapularShopIcon/>} iconPost="left"/>
                    </div>
                  </div>
              </li>
                 <li className="relative  mb-15" >
                <div className="hero-bg rounded-[38px] pt-40  p-7.5">
                    <Image className="absolute bottom-35 right-2" src={"/images/Papular-img.png"} alt="Img" width={243} height={243}/>
                    <strong className="flex items-center justify-between font-bold mb-1 text-[24px] text-[#000000]">Chicken soup <PapularLikeIcon/></strong>
                    <p className="text-[15px] text-[#000000] mb-1">Spicy with garlic</p>
                    <div className="flex items-end justify-between">
                        <strong className="font-bold text-[24px]  text-[#000000]">$10.00</strong>
                        <Button type="button" extraStyle="p-[12px] bg-[#000000] rounded-[5px]" icon={<PapularShopIcon/>} iconPost="left"/>
                    </div>
                  </div>
              </li>
                 <li className="relative mb-15" >
                <div className="hero-bg rounded-[38px] pt-40  p-7.5">
                    <Image className="absolute bottom-35 right-2" src={"/images/Papular-img.png"} alt="Img" width={243} height={243}/>
                    <strong className="flex items-center justify-between font-bold mb-1 text-[24px] text-[#000000]">Chicken soup <PapularLikeIcon/></strong>
                    <p className="text-[15px] text-[#000000] mb-1">Spicy with garlic</p>
                    <div className="flex items-end justify-between">
                        <strong className="font-bold text-[24px]  text-[#000000]">$10.00</strong>
                        <Button type="button" extraStyle="p-[12px] bg-[#000000] rounded-[5px]" icon={<PapularShopIcon/>} iconPost="left"/>
                    </div>
                  </div>
              </li>
                 <li className="relative mb-15" >
                <div className="hero-bg rounded-[38px] pt-40  p-7.5">
                    <Image className="absolute bottom-35 right-2" src={"/images/Papular-img.png"} alt="Img" width={243} height={243}/>
                    <strong className="flex items-center justify-between font-bold mb-1 text-[24px] text-[#000000]">Chicken soup <PapularLikeIcon/></strong>
                    <p className="text-[15px] text-[#000000] mb-1">Spicy with garlic</p>
                    <div className="flex items-end justify-between">
                        <strong className="font-bold text-[24px]  text-[#000000]">$10.00</strong>
                        <Button type="button" extraStyle="p-[12px] bg-[#000000] rounded-[5px]" icon={<PapularShopIcon/>} iconPost="left"/>
                    </div>
                  </div>
              </li>
                 <li className="relative  mb-15" >
                <div className="hero-bg rounded-[38px] pt-40  p-7.5">
                    <Image className="absolute bottom-35 right-2" src={"/images/Papular-img.png"} alt="Img" width={243} height={243}/>
                    <strong className="flex items-center justify-between font-bold mb-1 text-[24px] text-[#000000]">Chicken soup <PapularLikeIcon/></strong>
                    <p className="text-[15px] text-[#000000] mb-1">Spicy with garlic</p>
                    <div className="flex items-end justify-between">
                        <strong className="font-bold text-[24px]  text-[#000000]">$10.00</strong>
                        <Button type="button" extraStyle="p-[12px] bg-[#000000] rounded-[5px]" icon={<PapularShopIcon/>} iconPost="left"/>
                    </div>
                  </div>
              </li>
               <li className="relative  mb-15" >
                <div className="hero-bg rounded-[38px] pt-40  p-7.5">
                    <Image className="absolute bottom-35 right-2" src={"/images/Papular-img.png"} alt="Img" width={243} height={243}/>
                    <strong className="flex items-center justify-between font-bold mb-1 text-[24px] text-[#000000]">Chicken soup <PapularLikeIcon/></strong>
                    <p className="text-[15px] text-[#000000] mb-1">Spicy with garlic</p>
                    <div className="flex items-end justify-between">
                        <strong className="font-bold text-[24px]  text-[#000000]">$10.00</strong>
                        <Button type="button" extraStyle="p-[12px] bg-[#000000] rounded-[5px]" icon={<PapularShopIcon/>} iconPost="left"/>
                    </div>
                  </div>
              </li>
               <li className="relative  mb-15" >
                <div className="hero-bg rounded-[38px] pt-40  p-7.5">
                    <Image className="absolute bottom-35 right-2" src={"/images/Papular-img.png"} alt="Img" width={243} height={243}/>
                    <strong className="flex items-center justify-between font-bold mb-1 text-[24px] text-[#000000]">Chicken soup <PapularLikeIcon/></strong>
                    <p className="text-[15px] text-[#000000] mb-1">Spicy with garlic</p>
                    <div className="flex items-end justify-between">
                        <strong className="font-bold text-[24px]  text-[#000000]">$10.00</strong>
                        <Button type="button" extraStyle="p-[12px] bg-[#000000] rounded-[5px]" icon={<PapularShopIcon/>} iconPost="left"/>
                    </div>
                  </div>
              </li>
               <li className="relative  mb-15" >
                <div className="hero-bg rounded-[38px] pt-40  p-7.5">
                    <Image className="absolute bottom-35 right-2" src={"/images/Papular-img.png"} alt="Img" width={243} height={243}/>
                    <strong className="flex items-center justify-between font-bold mb-1 text-[24px] text-[#000000]">Chicken soup <PapularLikeIcon/></strong>
                    <p className="text-[15px] text-[#000000] mb-1">Spicy with garlic</p>
                    <div className="flex items-end justify-between">
                        <strong className="font-bold text-[24px]  text-[#000000]">$10.00</strong>
                        <Button type="button" extraStyle="p-[12px] bg-[#000000] rounded-[5px]" icon={<PapularShopIcon/>} iconPost="left"/>
                    </div>
                  </div>
              </li>
               <li className="relative  mb-15" >
                <div className="hero-bg rounded-[38px] pt-40  p-7.5">
                    <Image className="absolute bottom-35 right-2" src={"/images/Papular-img.png"} alt="Img" width={243} height={243}/>
                    <strong className="flex items-center justify-between font-bold mb-1 text-[24px] text-[#000000]">Chicken soup <PapularLikeIcon/></strong>
                    <p className="text-[15px] text-[#000000] mb-1">Spicy with garlic</p>
                    <div className="flex items-end justify-between">
                        <strong className="font-bold text-[24px]  text-[#000000]">$10.00</strong>
                        <Button type="button" extraStyle="p-[12px] bg-[#000000] rounded-[5px]" icon={<PapularShopIcon/>} iconPost="left"/>
                    </div>
                  </div>
              </li>
               <li className="relative  mb-15" >
                <div className="hero-bg rounded-[38px] pt-40  p-7.5">
                    <Image className="absolute bottom-35 right-2" src={"/images/Papular-img.png"} alt="Img" width={243} height={243}/>
                    <strong className="flex items-center justify-between font-bold mb-1 text-[24px] text-[#000000]">Chicken soup <PapularLikeIcon/></strong>
                    <p className="text-[15px] text-[#000000] mb-1">Spicy with garlic</p>
                    <div className="flex items-end justify-between">
                        <strong className="font-bold text-[24px]  text-[#000000]">$10.00</strong>
                        <Button type="button" extraStyle="p-[12px] bg-[#000000] rounded-[5px]" icon={<PapularShopIcon/>} iconPost="left"/>
                    </div>
                  </div>
              </li>
               <li className="relative  mb-15" >
                <div className="hero-bg rounded-[38px] pt-40  p-7.5">
                    <Image className="absolute bottom-35 right-2" src={"/images/Papular-img.png"} alt="Img" width={243} height={243}/>
                    <strong className="flex items-center justify-between font-bold mb-1 text-[24px] text-[#000000]">Chicken soup <PapularLikeIcon/></strong>
                    <p className="text-[15px] text-[#000000] mb-1">Spicy with garlic</p>
                    <div className="flex items-end justify-between">
                        <strong className="font-bold text-[24px]  text-[#000000]">$10.00</strong>
                        <Button type="button" extraStyle="p-[12px] bg-[#000000] rounded-[5px]" icon={<PapularShopIcon/>} iconPost="left"/>
                    </div>
                  </div>
              </li>
            </ul>
            <div className="flex justify-end">
              <Button type="button" title="Посмотреть меню" icon={<IconArrowRight/>} iconPost="right" extraStyle="p-[20px] flex items-center gap-[10px] text-[18px] font-semibold bg-[#000000] rounded-t-[13px] rounded-l-[13px] text-[#ffffff] hover:bg-white hover:text-black"/>
            </div>
        </div>
        </div>
             <div className="containers relative z-10 p-13.75">
            <h2 className="text-center text-[48px] font-extrabold mb-35.75  ">Новости/Галерея</h2>
            <ul className="flex items-center justify-center gap-27.5">
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
            </ul>
            <div className='flex justify-end'>
             <Button type="submit" title="Посмотреть все"  extraStyle="py-[18px] mt-10.25 px-[24px] rounded-[13px] bg-[#000000] text-white hover:bg-white hover:text-black"/>
            </div>
        </div>
    </section>
  )
}

export default menu