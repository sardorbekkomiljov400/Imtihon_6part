import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { IconLike, IconShop } from "@/public/icons"



const HeroHeader = () => {
    const HeroList = [
        {id:"1" ,href:"/menu", title:"Меню"},
        {id:"2" ,href:"/News", title:"Новости"},
        {id:"3" ,href:"/Booking", title:"Бронирование"},
        {id:"4" ,href:"/About", title:"О нас"},
        {id:"5" ,href:"/contact", title:"Контакты"},
       
    ]
  return (
    <header className="flex items-center justify-between pb-18.75">
        <a href="/"><Image  src={"/images/LOGO.png"} alt="LOGO" width={136} height={71}/></a>
        <nav className="flex items-center gap-10.75">
            {HeroList.map(item => <Link className="font-medium" key={item.id} href={item.href}>{item.title}</Link>)}
        </nav>
        <div className="flex items-center gap-7.5">
          <Button type="button" icon={<IconLike/>} iconPost="left" extraStyle="border-2  p-1.5 rounded-full"/>
          <Button type="button" icon={<IconShop/>} iconPost="left" extraStyle="border-2  p-1.5 rounded-full"/>
        </div>
    </header>
  )
}

export default HeroHeader