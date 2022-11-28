import { useRouter } from 'next/router'

import RoundButton from '@/components/common/Buttons/round'
import { useWallet } from '@/provider/wallet'

interface Props {
  header: Array<any>
  data: Array<any>
}

const List = ({header, data}: Props) => {
  const { joinGame } = useWallet()
  const router = useRouter()

  const onJoinGame = () => {
    joinGame()
    router.push('/board')
  }

  return (
    <div className='bg-white min-w-[1000px] max-h-[500px] text-left'>
      <div className='grid grid-cols-7 text-gray-500 px-10 py-4 pt-8'>
        {
          header.map( (item, index) => (
            <div key={index}>{item}</div>
          ))
        }
      </div>
      <div className='max-h-[428px] overflow-auto scrollbar scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full scrollbar-thin'>
        {
          data.map( (record, index) => (
            <div className='grid grid-cols-7 py-4 items-center border-b border-gray-100 px-10' key={index}>
              {
                record.map( (item: any, index: number) => (
                  <div key={index}>{item}</div>
                ))
              }
              <RoundButton className='w-32 px-0' text='Request to join' onClick={onJoinGame}/>
              <div className='w-full flex justify-end'>
                <RoundButton className='w-32 px-0 border border-blue-0 bg-white text-blue-0' text='Spectate'/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default List