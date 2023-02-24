import DialogLayout from '@/layout/Dialog'
import Dropdown from '@/components/common/Dropdown'

interface Props {
  show?: boolean
}

const RoomDialog = ({show}: Props) => {
  return (
    <DialogLayout
      header='Creat New Room'
      okName='Save'
      cancelName='Cancel'
      className='w-[500px]'
      show={show}
    >
      <Dropdown
        className='w-full mb-8'
        label='Entry Fee'
        options={['0.001ETH', '0.002ETH', '0.003ETH']}
        unit='ETH'
      />
      <Dropdown
        className='w-full mb-8'
        label='Room Privacy'
        options={['0.001ETH', '0.002ETH', '0.003ETH']}
      />
    </DialogLayout>
  )
}

export default RoomDialog