import App from '@/components/app'
import Hero from '@/components/hero'
import Header from '@/components/layout/header'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment, useEffect } from 'react'

const Home: NextPage = () => {
    useEffect(() => {
        document.addEventListener('load', () => {
            document.documentElement.classList.add('dark')
        })
    }, [])
    return (
        <Fragment>
            <Head>
                <title>Moogli</title>
            </Head>

            <main className="bg-neutrals-30 h-screen">
                <Header isDark />
                <Hero />
                <App />
            </main>
        </Fragment>
    )
}

export default Home
