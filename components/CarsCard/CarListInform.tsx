import * as React from 'react';
import { CarsItemType } from '../../store/action-creator/cars';
import styles from '../../styles/pages/cars/CarListInform.module.scss'
import CarListOptions from './CarListOptions';

interface CarListInformProp {
   item: CarsItemType
}

const CarListInform: React.FC<CarListInformProp> = ({ item }) => {
   return (
      <section className={styles.contentinform}>

         {item.technical_characteristics.brand != undefined && (
            <>
               <div className={styles.contentelem}>
                  <span className={styles.contentelemtitle}>
                     Brand:
                  </span>
                  <span className={styles.contentblock}>
                     {item.technical_characteristics.brand}
                  </span>
               </div>
               <div className={styles.contentelem}>
                  <span className={styles.contentelemtitle}>
                     Model:
                  </span>
                  <span className={styles.contentblock}>
                     {item.technical_characteristics.model}
                  </span>
               </div>
               <div className={styles.contentelem}>
                  <span className={styles.contentelemtitle}>
                     Year of issue:
                  </span>
                  <span className={styles.contentblock}>
                     {item.technical_characteristics.productionYear + ' ' + 'год'}
                  </span>
               </div>
               <div className={styles.contentelem}>
                  <span className={styles.contentelemtitle}>
                     Mileage:
                  </span>
                  <span className={styles.contentblock}>
                     {item.technical_characteristics.mileage + ' ' + 'км'}
                  </span>
               </div>
            </>
         )}
         <CarListOptions item={item} />
         <div className={styles.contentelem}>
            <span className={styles.contentelemtitle}>
               Description:
            </span>
            <span className={styles.contentblock}>
               {item.description}
            </span>
         </div>
         <div className={styles.contentelem}>
            <span className={styles.contentelemtitle}>
               Price:
            </span>
            <span className={styles.contentblock}>
               {item.price} руб
            </span>
         </div>
      </section>
   );
}

export default CarListInform;

