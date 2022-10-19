import * as React from 'react';
import { CarsItemType } from '../../../store/action-creator/cars';
import styles from '../../../styles/pages/Tecnicale/TecnicalCharacteristics.module.scss'

interface TecnicalCharacteristicsProp {
   car: CarsItemType
}

const TecnicalCharacteristics: React.FC<TecnicalCharacteristicsProp> = ({ car }) => {
   return (
      <>
         {car?.technical_characteristics?.brand && (
            <>
               <div className={styles.contentelem}>
                  <span className={styles.contentelemtitle}>
                     Brand:
                  </span>
                  {car?.technical_characteristics?.brand}
               </div>
               <div className={styles.contentelem}>
                  <span className={styles.contentelemtitle}>
                     Model:
                  </span>
                  {car?.technical_characteristics?.model}
               </div>
               <div className={styles.contentelem}>
                  <span className={styles.contentelemtitle}>
                     Year of issue:
                  </span>
                  {car?.technical_characteristics?.productionYear} год
               </div>
               <div className={styles.contentelem}>
                  <span className={styles.contentelemtitle}>
                     Mileage:
                  </span>
                  {car?.technical_characteristics?.mileage} км
               </div>
            </>
         )}
      </>
   );
}

export default TecnicalCharacteristics;