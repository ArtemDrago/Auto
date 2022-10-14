import * as React from 'react';
import { CarsItemType } from '../../store/action-creator/cars';
import styles from '../../styles/pages/cars/CarListInform.module.scss'
import CarListOptions from './CarListOptions';

interface CarListInformProp {
   item: CarsItemType
}

const CarListInform: React.FC<CarListInformProp> = ({ item }) => {

   return (
      <div className={styles.contentinform}>
         <div className={styles.contentelem}>
            <span className={styles.contentelemtitle}>
               Brand:
            </span>
            {item.technical_characteristics.brand == '' ? 'Not information' : item.technical_characteristics.brand}
         </div>
         <div className={styles.contentelem}>
            <span className={styles.contentelemtitle}>
               Model:
            </span>
            {item.technical_characteristics.model == '' ? 'Not information' : item.technical_characteristics.model}
         </div>
         <div className={styles.contentelem}>
            <span className={styles.contentelemtitle}>
               Year of issue:
            </span>
            {item.technical_characteristics.productionYear == '' ? 'Not information' : item.technical_characteristics.productionYear + ' ' + 'год'}
         </div>
         <div className={styles.contentelem}>
            <span className={styles.contentelemtitle}>
               Mileage:
            </span>
            {item.technical_characteristics.mileage == '' ? 'Not information' : item.technical_characteristics.mileage + ' ' + 'км'}
         </div>
         <CarListOptions item={item} />
         <div className={styles.contentelem}>
            <span className={styles.contentelemtitle}>
               Description:
            </span>
            {item.description}
         </div>
         <div className={styles.contentelem}>
            <span className={styles.contentelemtitle}>
               Price:
            </span>
            {item.price} руб
         </div>
      </div>
   );
}

export default CarListInform;

