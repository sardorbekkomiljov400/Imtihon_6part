"use client"

import Image from "next/image"
import { Link } from "@/i18n/navigation" 
import Button from "./Button"
import { IconLike, IconShop } from "@/public/icons"
import { useTranslations } from "next-intl"

const HeroHeader = () => {
  const t = useTranslations("Navbar")

  const HeroList = [
    { id: "1", href: "/menu", title: t("menu") },
    { id: "2", href: "/navoste", title: t("news") },
    { id: "3", href: "/brond", title: t("booking") },
    { id: "4", href: "/About", title: t("about") },
    { id: "5", href: "/contact", title: t("contacts") },
  ]

  return (
    <header className="flex items-center justify-between pb-18.75">
      {/* 4. Logotip uchun ham Link ishlatsangiz yaxshi, asosiy tilga oson qaytadi */}
      <Link href="/">
        <Image src={"/images/LOGO.png"} alt="LOGO" width={136} height={71} />
      </Link>

      <nav className="flex items-center gap-10.75">
        {HeroList.map((item) => (
          <Link 
            className="font-medium hover:text-red-600 active:text-red-600 transition-colors" 
            key={item.id} 
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-7.5">
        <Button 
          type="button" 
          icon={<IconLike />} 
          iconPost="left" 
          extraStyle="border-2 cursor-pointer p-1.5 rounded-full hover:bg-red-600 transition-all" 
        />
        <Button 
          type="button" 
          icon={<IconShop />} 
          iconPost="left" 
          extraStyle="border-2 cursor-pointer p-1.5 rounded-full hover:bg-green-600 transition-all" 
        />
      </div>
    </header>
  )
}

export default HeroHeader