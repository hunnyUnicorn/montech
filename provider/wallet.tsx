import { createContext, useContext, PropsWithChildren, useState } from 'react'
import { useRouter } from 'next/router'

export type WalletCtxProps = {
  connected: boolean
  connectWallet: (which: number) => void
}

const WalletCtx = createContext<WalletCtxProps>({} as WalletCtxProps)

export function useWallet() {
  return useContext(WalletCtx)
}

export function WalletProvider({ children }: PropsWithChildren<{}>) {
  const router = useRouter()
  const [connected, setConnected] = useState(false)
  const [isJoined, setIsJoined] = useState(false)

  const connectWallet = (which: number) => {
    if ( which === 1 ) {

    }
    setConnected(true)
    router.push('list')
  }

  const joinGame = () => {
    setIsJoined(true)
  }

  const leftGame = () => {
    setIsJoined(true)
  }

  const value = {
    connected,
    connectWallet,
    isJoined,
    joinGame,
    leftGame
  }

  return <WalletCtx.Provider value={value}>
    { children }
  </WalletCtx.Provider>
}
