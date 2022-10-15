import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import { Navbar } from '../ui'

interface Props {
  children: ReactNode
}

export const Layout:FC<Props> = ({ children }) => {
  return (
    <>
        <Head>

        </Head>

        <nav>
           <Navbar />
        </nav>
        <main style={{ padding: '20px 50px'}}>
            { children }
        </main>
    </>
  )
}
