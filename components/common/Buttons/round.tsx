import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

interface Props {
  onClick?: any
  className?: string
  text?: string
  icon?: string
  children?: React.ReactNode
}

const RoundButton = ({className, text, icon, onClick, children}: Props) => {
  return (
    <div
      className={twMerge('py-2 px-4 relative rounded-md bg-blue-0 text-white text-center', className)}
      onClick={onClick}
    >
      {
        icon &&
        <Image
          src={icon}
          className='absolute left-11 top-[50%] -translate-y-[50%]'
          alt=''
          width={25}
        />
      }
      <div>
        {text}
      </div>
      {children}
    </div>
  )
}

export default RoundButton