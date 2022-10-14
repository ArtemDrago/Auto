import Head from 'next/head';
import * as React from 'react';
import styles from '../../styles/components/Form/TitleForm.module.scss'

interface TitleFormProp {
   setVisible: Function,
   keywords: string
}

const TitleForm: React.FC<TitleFormProp> = ({ keywords, setVisible }) => {
   return (
      <>
         <Head>
            <title>{keywords}</title>
         </Head>

         <div className={styles.btncontainer}>
            <button
               className={styles.btn}
               onClick={() => setVisible(false)}
            >
               close
            </button>
            <h3 className={styles.title}>{keywords}</h3>
         </div>
      </>
   );
}

export default TitleForm;