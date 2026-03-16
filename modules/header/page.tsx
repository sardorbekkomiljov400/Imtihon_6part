"use client" // Agar LanguageSelect client component bo'lsa kerak bo'ladi

import Button from "@/components/Button"
import LanguageSelect from "@/components/LanguageSelect"
import { IconEmail, IconTel, IconUser } from "@/public/icons"
import { useTranslations } from "next-intl" // 1. Tarjimani import qilamiz

const Header = () => {
  // 2. JSON faylidagi "Navbar" bo'limini chaqiramiz
  const t = useTranslations("Navbar")

  return (
    <header>
      <div className='containers pt-3.75 pb-11.5 flex items-center justify-between'>
        <div className="flex items-center gap-6.75">
          <a className="flex items-center gap-3 text-[16px] text-[#000000]" href="tel:+99890758383833"> 
            <IconTel/>
            +998(90)758383833
          </a>
          <a className="flex items-center gap-3 text-[16px] text-[#000000]" href="mailto:info@bmgsoft.com">
            <IconEmail/>
            info@bmgsoft.com
          </a>
        </div>

        <div className="flex items-center gap-8.75">
          <div className="relative group flex items-center gap-3.5 cursor-pointer">
            <LanguageSelect/>
          </div>
          
          {/* 3. "Вход в аккаунт" o'rniga t('login') ni qo'yamiz */}
          <Button 
            type="button" 
            extraStyle="flex font-semibold items-center gap-3 py-2 rounded-[5px] px-2 bg-[#000000] text-[#FFFFFF] text-[10px] hover:bg-white hover:text-black transition-colors" 
            icon={<IconUser/>} 
            iconPost="left" 
            title={t("login")} // <--- Tarjima shu yerda
          />
        </div>
      </div>
    </header>
  )
}

export default Header