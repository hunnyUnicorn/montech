import { createContext, useContext, PropsWithChildren, useState } from 'react'

export type WalletCtxProps = {
  connected: boolean
  connectWallet: (which: number) => void
}

const WalletCtx = createContext<WalletCtxProps>({} as WalletCtxProps)

export function useWallet() {
  return useContext(WalletCtx)
}

export function WalletProvider({ children }: PropsWithChildren<{}>) {
  const [connected, setConnected] = useState(false)
  const connectWallet = (which: number) => {
    if ( which === 1 ) {

    }
    setConnected(true)
  }
  const value = {
    connected,
    connectWallet,
  }

  return <WalletCtx.Provider value={value}>
    { children }
  </WalletCtx.Provider>
}
