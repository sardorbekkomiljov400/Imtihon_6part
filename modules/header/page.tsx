import Button from "@/components/Button"
import { IconArrowbottom, IconEmail, IconRussya, IconTel, IconUser } from "@/public/icons"

const Header = () => {
  return (
    <header>
        <div className='containers pt-3.75 pb-11.5 flex items-center justify-between'>
            <div className="flex items-center gap-6.75">
                <a className="flex items-center gap-3  text-[16px] text-[$000000]" href="tel:+99890758383833"> 
                    <IconTel/>
                 +998(90)758383833</a>
                 <a className="flex items-center gap-3  text-[16px] text-[$000000]" href="email:info@bmgsoft.com">
                  <IconEmail/>
                  info@bmgsoft.com
                 </a>
            </div>
            <div className="flex items-center gap-8.75">
              <div className="flex  items-center  gap-3.5  ">
                <IconRussya/>
                <Button type="button" title="Русский" extraStyle="flex items-center gap-3 text-[#000000] text-[16px]" icon={<IconArrowbottom/>} iconPost="right"  />
              </div>
              <Button  type="button" extraStyle="flex font-semibold items-center gap-3 py-2 rounded-[5px]  px-2 bg-[#000000] text-[#FFFFFF] text-[10px]" icon={<IconUser/>} iconPost="left" title="Вход в аккаунт"/>
            </div>

        </div>
    </header>
  )
}

export default Header