
interface Props {
  header: Array<any>
  data: Array<any>
}

const List = ({header, data}: Props) => {
  return (
    <div className='w-[90%] bg-white min-w-[1000px] max-h-[500px] text-left'>
      <div className='grid grid-cols-7 text-gray-500 px-10 py-4 pt-8'>
        {
          header.map( (item, index) => (
            <div key={index}>{item}</div>
          ))
        }
      </div>
      <div className='max-h-[428px] overflow-auto'>
        {
          data.map( (record, index) => (
            <div className='grid grid-cols-7 py-4 items-center border-b border-gray-100 px-10' key={index}>
              {
                record.map( (item: any, index: number) => (
                  <div key={index}>{item}</div>
                ))
              }
              <div className='w-32 rounded-md w- py-1 bg-blue-0 text-white text-center'>Request to join</div>
              <div className='w-full flex justify-end'>
                <div className='w-32 rounded-md border border-blue-0 py-1 bg-white text-blue-0 text-center items-right'>Spectate</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default List