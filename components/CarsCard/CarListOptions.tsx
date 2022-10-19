import * as React from 'react';
import { useEffect, useState } from 'react';
import { CarsItemType } from '../../store/action-creator/cars';
import { objectToArr } from '../../store/redusers/stateReduser';
import styles from '../../styles/components/CarListOptions/CarListOptions.module.scss'

interface CarListOptionsProp {
   item: CarsItemType
}

const CarListOptions: React.FC<CarListOptionsProp> = ({ item }) => {
   const [arrOptions, setArrOptions] = useState([])

   useEffect(() => {
      setArrOptions(objectToArr(item.options))
   }, [])
   if (item?.options.length === 0) {
      return (<></>)
   }
   return (
      <div className={styles.contentelem}>
         <span className={styles.contentelemtitle}>
            Options:
         </span>
         {arrOptions.map((el: any, index: number) =>
            <div key={index} className={styles.option}>
               {index != arrOptions.length - 1 ?
                  <> {el} ,</>
                  :
                  <> {el}</>
               }
            </div>
         )}
      </div>
   );
}

export default CarListOptions;