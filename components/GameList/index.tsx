import MainLayout from '@/layout/Main'

import List from './list'
import Tabs from './tabs'

const GameList = () => {
  const mockAvailHeader = [ 'GAMEID', 'LIMIT', 'ENTER', 'NO. OF PLAYERS', 'DATE CREATED' ]
  const mockAvailable = [
    [28, 2, '0.5ETH', 0, '04/04/2022'],
    [28, 2, '0.5ETH', 0, '04/04/2022'],
    [28, 2, '0.5ETH', 0, '04/04/2022'],
    [28, 2, '0.5ETH', 0, '04/04/2022'],
    [28, 2, '0.5ETH', 0, '04/04/2022'],
    [28, 2, '0.5ETH', 0, '04/04/2022'],
  ]
  const mockUnavailHeader = [ 'GAMEID', 'LIMIT', 'WINNER', 'AMOUNT WON', 'DATE CREATED' ]
  const mockUnavailable = [
    [28, 2, '0x449...103429', '0.003ETH', '04/04/2022'],
    [28, 2, '0x449...103429', '0.003ETH', '04/04/2022'],
    [28, 2, '0x449...103429', '0.003ETH', '04/04/2022'],
    [28, 2, '0x449...103429', '0.003ETH', '04/04/2022'],
    [28, 2, '0x449...103429', '0.003ETH', '04/04/2022'],
    [28, 2, '0x449...103429', '0.003ETH', '04/04/2022'],
    [28, 2, '0x449...103429', '0.003ETH', '04/04/2022'],
  ]
  return (
    <MainLayout className='text-center'>
      <Tabs
        headers={['Available Games', 'Unavailabl Games']}
      >
        <List data={mockAvailable} header={mockAvailHeader}/>
        <List data={mockUnavailable} header={mockUnavailHeader}/>
      </Tabs>
    </MainLayout>
  )
}

export default GameList