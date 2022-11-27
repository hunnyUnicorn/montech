import Image from 'next/image'

import { useWallet } from '@/provider/wallet'
import ChessIcon from '@/public/chess-pawn-icon.svg'

const Header = () => {
  const { connected } = useWallet()
  return connected ?
    <div className='flex justify-between border-b-2 p-2 mt-2'>
      <div className='flex font-bold gap-2 items-center'>
        CHESS
        <Image src={ChessIcon} alt='Logo' width={20}/>
        GAMES
      </div>
      <div className='flex'>
        <div className='rounded-l-md bg-blue-0 p-2 text-white'>0.04 ETH</div>
        <div className='rounded-r-md bg-white p-2'>0xsdfas..sdf</div>
      </div>
    </div> :
    <div className='flex font-bold gap-2 mt-10'>
      CHESS
      <Image src={ChessIcon} alt='Logo' width={20}/>
      GAMES
    </div>
}

export default Header