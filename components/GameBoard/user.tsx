import Image from 'next/image'
import UserIcon from '@/public/user.svg'

interface Props {
  name?: string
}

const UserComponent = ({name}: Props) => {
  return (
    <div className='w-full flex justify-between'>
      <div className='flex gap-2 text-gray-300 py-2'>
        <Image className='bg-dark-1 rounded-md' src={UserIcon} alt='' width={30}/>
        {name}
      </div>
      <div className='px-4 py-2 rounded-md bg-dark-1 text-gray-300'>
        00:00:00
      </div>
    </div>
  )
}

export default UserComponent