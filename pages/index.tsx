import type { NextPage } from 'next'
import Head from 'next/head'
import ButtonMain from '../components/ButtonMain/ButtonMain'
import MainContainer from '../components/MainContainer'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <MainContainer keywords='main page'>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
        </Head>
        <h1 className={styles.title}>
          Welcome to the site for the selection of cars !!!
        </h1>
        <ButtonMain href={'/cars'} text='Cars' />
      </div>
    </MainContainer>
  )
}

export default Home
