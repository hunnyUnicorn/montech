import Image from 'next/image'
import ChessIcon from '@/public/chess-pawn-icon.svg'

const Header = () => {
  return (
    <div>
      CHESS
      <Image src={ChessIcon} alt='Logo' />
      GAMES
    </div>
  )
}

export default Header