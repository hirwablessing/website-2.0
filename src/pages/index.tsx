import Header from '@/components/layout/header'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment, useEffect } from 'react'
import Hero from '@/components/hero'
import App from './app'

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

            <main>
                <Header />
                <Hero />
                <App />
            </main>
        </Fragment>
    )
}

export default Home
