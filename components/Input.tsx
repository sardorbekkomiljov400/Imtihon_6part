import { FocusEventHandler } from "react"

type InputProps = {
  extraStyle?: string
  title?: string
  type?: React.HTMLInputTypeAttribute
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}

function Input({ onFocus, onBlur, extraStyle, title, type }: InputProps) {
  return (
    <input onFocus={onFocus} onBlur={onBlur} className={`py-3 w-90 outline-none border-b ${extraStyle}`} type={type} placeholder={title}/>
  )
}

export default Input