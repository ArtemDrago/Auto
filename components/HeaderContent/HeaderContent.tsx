import * as React from 'react';
import { useState } from 'react';
import styles from '../../styles/components/HeaderContent/HeaderContent.module.scss'
import FormMain from '../form/FormMain';
import MainFilter from './filter/MainFilter';

interface HeaderContentProp {
   children: JSX.Element,
   resetFilter: Function,
   setFilterParams: Function,
}

const HeaderContent: React.FC<HeaderContentProp> = ({ children, setFilterParams, resetFilter }) => {
   const [visible, setVisible] = useState(false)
   const [openFilter, setOpentFilter] = useState(false)

   return (
      <>
         <FormMain visible={visible} setVisible={setVisible} keywords={'create'} car={{}} />
         <div className={styles.navbarcontent}>
            <button
               className={styles.btn}
               onClick={() => setVisible(true)}
            >
               Create
            </button>
            <button
               className={styles.btn}
               onClick={() => setOpentFilter(!openFilter)}
            >
               Filter
            </button>
            <button
               className={styles.btn}
               onClick={() => resetFilter()}
            >
               Reset settings
            </button>
         </div>
         <div className={styles.content}>
            {openFilter ?
               <MainFilter
                  setOpentFilter={setOpentFilter}
                  setFilterParams={setFilterParams}
               />
               :
               <></>
            }
            {children}
         </div>
      </>
   );
}

export default HeaderContent;