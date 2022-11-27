import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

interface Props {
  onClick?: any
  className?: string
  text?: string
  icon?: string
}

const RoundButton = ({className, text, icon, onClick}: Props) => {
  return (
    <div
      className={twMerge('w-[400px] py-2 px-4 relative rounded-full bg-blue-0 text-white', className)}
      onClick={onClick}
    >
      <Image
        src={icon??''}
        className='absolute left-11 top-[50%] -translate-y-[50%]'
        alt=''
        width={25}
      />
      <div>
        {text}
      </div>
    </div>
  )
}

export default RoundButton