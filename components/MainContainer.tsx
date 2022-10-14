import Head from 'next/head';
import * as React from 'react';
import A from './A/A';
import styles from '../styles/components/MainContainer/MainContainer.module.scss'

interface MainContainerProp {
   keywords: string,
   children: any
}

const MainContainer: React.FC<MainContainerProp> = ({ children, keywords }) => {
   return (
      <div className={styles.container}>
         <Head>
            <title>{keywords}</title>
         </Head>
         <div className={styles.navbar}>
            <A href={'/'} text='Main' />
            <A href={'/cars'} text='Cars' />
         </div>
         <div className={styles.content}>
            {children}
         </div>
      </div>
   );
}

export default MainContainer;