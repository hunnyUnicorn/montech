import { twMerge } from 'tailwind-merge'

import { useWallet } from '@/provider/wallet'
import Header from './Header'
import Board from '@/public/board.jpg'

interface Props {
  className?: string
  children?: React.ReactNode
}

const MainLayout = ({className, children}: Props) => {
  const { isJoined } = useWallet()

  return (
    <div className='px-16'>
      <Header />
      {
        isJoined ?
        <div className='fixed top-0 left-0 w-screen h-screen bg-dark-0 z-[-10]'/>:
        <div className={`fixed top-0 left-0 w-screen h-screen bg-[url("${Board.src}")] z-[-10]`}/> 
      }
      <div className={twMerge('w-screen h-screen absolute top-0 left-0 flex flex-col items-center justify-center', className)}>
        {children}
      </div>
    </div>
  )
}

export default MainLayout