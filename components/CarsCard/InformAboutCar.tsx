import * as React from 'react';
import { CarsItemType } from '../../store/action-creator/cars';
import styles from '../../styles/pages/cars/InformAboutCar.module.scss'
import CarListOptions from './CarListOptions';

interface InformAboutCarProp {
   car: CarsItemType
}

const InformAboutCar: React.FC<InformAboutCarProp> = ({ car }) => {
   return (
      <div className={styles.contentblock}>
         <h2 className={styles.title}>
            {car.name}
         </h2>
         <div className={styles.maincontant}>
            <div className={styles.images}>
               {car.images?.map((el: any, index: number) =>
                  <div key={index} className={styles.img}>
                     <img src={el || Object.values(el)[0]} className={styles.image} />
                  </div>
               )}
            </div>
            <div className={styles.container}>
               <div className={styles.contentinform}>
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
                  <CarListOptions item={car} />
                  <div className={styles.contentelem}>
                     <span className={styles.contentelemtitle}>
                        Description:
                     </span>
                     {car.description}
                  </div>
                  <div className={styles.contentelem}>
                     <span className={styles.contentelemtitle}>
                        Price:
                     </span>
                     {car.price} руб
                  </div>
                  <div className={styles.contentelem}>
                     <span className={styles.contentelemtitle}>
                        Contacts:
                     </span>
                     <a href="#" className={styles.linkmail}>
                        {car.contacts}
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default InformAboutCar;