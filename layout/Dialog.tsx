import React, { useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

import RoundButton from '@/components/common/Buttons/round'

interface Props {
  className?: string
  header?: React.ReactNode
  body?: React.ReactNode
  footer?: React.ReactNode
  okName?: string
  okAction?: () => void
  cancelName?: string
  cancelAction?: () => void
  children?: React.ReactNode
  closeOnOutSide?: () => void
  show?: boolean
}

const DialogLayout = ({className, children, header, footer, okName, okAction, cancelName, cancelAction, closeOnOutSide, show}: Props) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if ( !containerRef?.current?.contains(e.target) ) {
        if ( closeOnOutSide )
          closeOnOutSide()
      }
    }
    window.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
  return (
    show ? <div className='w-screen h-screen fixed'>
      <div className='w-full h-full bg-gray-500/50 backdrop-blur-sm'/>
      <div
        ref={containerRef}
        className={twMerge('p-8 rounded-lg bg-white absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]', className)}
      >
        <div className='py-2 font-bold text-2xl mb-8'>
          {header}
        </div>
        {children}
        <div className='py-2'>
          {
            footer ? footer :
            <div className='flex justify-end'>
              <RoundButton className='mr-2 bg-white border border-blue-0 text-gray-500' text={cancelName} onClick={cancelAction} />
              <RoundButton text={okName} onClick={okAction} />
            </div>
          }
        </div>
      </div>
    </div> : <></>
  )
}

export default DialogLayout