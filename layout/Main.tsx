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
      <main className='w-full h-full flex items-center justify-center'>
        <div>
          {children}
        </div>
      </main>
    </div>
  )
}

export default MainLayout