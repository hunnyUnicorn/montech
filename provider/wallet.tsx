import { createContext, useContext, PropsWithChildren, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const Metamask = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})

const PhantomWallet = new WalletConnectConnector({
    rpc: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    bridge: "https://phantom.app",
});

export type WalletCtxProps = {
  connected: boolean
  connectWallet: (which: number) => void
  isJoined: boolean
  joinGame: () => void
  leftGame: () => void
}

const WalletCtx = createContext<WalletCtxProps>({} as WalletCtxProps)

export function useWallet() {
  return useContext(WalletCtx)
}

export function WalletProvider({ children }: PropsWithChildren<{}>) {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  const router = useRouter()
  const [connected, setConnected] = useState(false)
  const [isJoined, setIsJoined] = useState(false)

  useEffect( () => {
    if ( router.pathname !== '/' && !connected )
      router.push('/')
  }, [router])

  const connectWallet = (which: number) => {
    if ( which === 0 ) {
      activate(Metamask)
    }
    else {
      activate(PhantomWallet)
    }
    setConnected(true)
    // router.push('list')
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
