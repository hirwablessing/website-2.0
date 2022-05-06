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

            <Header isDark />
            <main className="bg-neutrals-30 h-screen">
                <section>
                    <Hero />
                    <App />
                </section>
            </main>
        </Fragment>
    )
}

export default Home
