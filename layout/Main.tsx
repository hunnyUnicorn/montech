import Header from './Header'

interface Props {
  children?: React.ReactNode
}

const MainLayout = ({children}: Props) => {
  return (
    <div className='px-16'>
      <Header />
      <div className='fixed top-0 left-0 w-screen h-screen bg-[url("../public/board.jpg")] z-[-10]'/>
      <main className='w-full h-full flex items-center justify-center'>
        {children}
      </main>
    </div>
  )
}

export default MainLayout