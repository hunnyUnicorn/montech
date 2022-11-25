import Header from './Header'

interface Props {
  children?: React.ReactNode
}

const MainLayout = ({children}: Props) => {
  return (
    <div>
      <Header />
      {children}
      <div className='fixed top-0 left-0 w-screen h-screen
        before:content-[" "] before:absolute before:content-w-full before:h-full before:bg-repeat before:bg-gradient-to-r before:from-black before:to-gray'
      >
      </div>
    </div>
  )
}

export default MainLayout