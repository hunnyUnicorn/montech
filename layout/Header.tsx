import Image from 'next/image'
import ChessIcon from '@/public/chess-pawn-icon.svg'

const Header = () => {
  return (
    <div className='flex'>
      CHESS
      <Image src={ChessIcon} alt='Logo' width={20}/>
      GAMES
    </div>
  )
}

export default Header