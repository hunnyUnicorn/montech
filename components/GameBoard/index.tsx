import Image from 'next/image'

import ChessBoard from '@/public/chess-board.jpg'
import MainLayout from '@/layout/Main'
import UserComponent from './user'

const GameBoard = () => {
  return (
    <MainLayout>
      <div className='absolute top-20 left-20 text-white '>
        &lt;&nbsp;&nbsp;Go Back
      </div>
      <div className='w-[480px]'>
        <UserComponent name='Opponent' className='mb-4'/>
        <div className={`w-[480px] h-[480px]`} style={{backgroundImage:`url(${ChessBoard.src})`}}/>
        <UserComponent name='My Avatar' className='mt-4'/>
      </div>
    </MainLayout>
  )
}

export default GameBoard