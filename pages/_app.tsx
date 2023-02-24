import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLibrary(provider: any) {
  return new Web3(provider)
}

import { WalletProvider } from '@/provider/wallet'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <WalletProvider>
        <Component {...pageProps} />
      </WalletProvider>
    </Web3ReactProvider>
  )
}
