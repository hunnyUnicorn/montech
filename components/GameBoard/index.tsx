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
      <div className='w-[50%]'>
        <UserComponent name='Opponent'/>
        <div className={`w-[640px] h-[640px] bg-[url("${ChessBoard.src}")]`}/>
        <UserComponent name='My Avatar'/>
      </div>
    </MainLayout>
  )
}

export default GameBoard