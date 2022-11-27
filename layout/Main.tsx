import { twMerge } from 'tailwind-merge'
import Header from './Header'

interface Props {
  className?: string
  children?: React.ReactNode
}

const MainLayout = ({className, children}: Props) => {
  return (
    <div className='px-16'>
      <Header />
      <div className='fixed top-0 left-0 w-screen h-screen bg-[url("../public/board.jpg")] z-[-10]'/>
      <div className={twMerge(className, 'w-screen h-screen absolute top-0 left-0 flex flex-col items-center justify-center')}>
        {children}
      </div>
    </div>
  )
}

export default MainLayout