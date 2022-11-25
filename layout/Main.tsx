import Header from './Header'

interface Props {
  children: any
}

const MainLayout = ({children} : Props) => {
  return (
    <div>
      <Header />
      { children }
    </div>
  )
}

export default MainLayout