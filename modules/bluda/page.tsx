import Button from "@/components/Button"
import { IconArrowRight, PapularLikeIcon, PapularShopIcon } from "@/public/icons"
import Image from "next/image"

const Popular = () => {
  return (
    <section className="py-15 Popular-bg" >
        <div className="containers">
            <h2 className="text-[48px] text-[#000000] text-center font-extrabold mb-30">Популярные блюда</h2>
            <ul className="flex items-center justify-center mb-14.25 ">
              <li className="relative" >
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
              <Button type="button" title="Посмотреть меню" icon={<IconArrowRight/>} iconPost="right" extraStyle="p-[20px] flex items-center gap-[10px] text-[18px] font-semibold bg-[#000000] rounded-t-[13px] rounded-l-[13px] text-[#ffffff]"/>
            </div>
        </div>
    </section>
  )
}

export default Popular