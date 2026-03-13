import Button from '@/components/Button'
import HeroHeader from '@/components/HeroHeader'
import {  IconArrowRight } from '@/public/icons'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='hero-bg2  '>
        <div className='containers  p-15 hero-bg rounded-[50px] '>
            <HeroHeader/>
            <div className='flex items-center justify-between'>
              <div className='w-100'  >
                <h1 className='text-[64px] uppercase font-extrabold mb-4.25' >Вкусная еда ждет тебя!</h1>
                <Button type='button' extraStyle='p-4 flex items-center gap-2.5 rounded-t-[13px]  text-[#ffffff] rounded-l-[13px] bg-[#000000]'  title='Посмотреть меню' icon={<IconArrowRight/>} iconPost='right'/>
              </div>
              <Image src={"/images/Hero-img.png"} className='h-150' alt='Hero img' width={800} height={800}/>
            </div>
        </div>
    </section>
  )
}

export default Hero