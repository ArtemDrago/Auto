import * as React from 'react';
import { useEffect, useState } from 'react';
import { FilterParamsProps } from '../../store/action-creator/cars';
import styles from '../../styles/components/HeaderContent/HeaderContent.module.scss'
import FormMain from '../form/FormMain';
import MainFilter from './filter/MainFilter';

interface HeaderContentProp {
   children: JSX.Element,
   resetFilter: Function,
   setFilterParams: Function,
   filterParams: FilterParamsProps
}

const HeaderContent: React.FC<HeaderContentProp> = ({ children, setFilterParams, resetFilter, filterParams }) => {
   const [visible, setVisible] = useState(false)
   const [openFilter, setOpentFilter] = useState(false)

   useEffect(() => {
      if (visible && openFilter) {
         setOpentFilter(false)
      }
   }, [visible])

   const resetFunc = () => {
      resetFilter()
      setOpentFilter(false)
   }

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
               onClick={() => resetFunc()}
            >
               Reset settings
            </button>
         </div>
         <div className={styles.content}>
            {openFilter ?
               <MainFilter
                  filterParams={filterParams}
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