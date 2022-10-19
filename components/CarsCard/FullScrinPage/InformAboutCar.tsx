import * as React from 'react';
import { CarsItemType } from '../../../store/action-creator/cars';
import styles from '../../../styles/pages/cars/InformAboutCar.module.scss'
import CarListOptions from '../CarListOptions';
import TecnicalCharacteristics from './TecnicalCharacteristics';

interface InformAboutCarProp {
   car: CarsItemType
}

const InformAboutCar: React.FC<InformAboutCarProp> = ({ car }) => {
   return (
      <section className={styles.contentblock}>
         <h2 className={styles.title}>
            {car.name}
         </h2>
         <div className={styles.maincontant}>

            <div className={styles.images}>
               {car.images?.map((el: any, index: number) =>
                  <div key={index} className={styles.img}>
                     {typeof (el) == 'string' ?
                        <img
                           src={el}
                           className={styles.image}
                           alt="img car"
                        />
                        :
                        <div
                           className={styles.image}
                        >
                           {el.path}
                        </div>
                     }
                  </div>
               )}
            </div>

            <div className={styles.container}>
               <div className={styles.contentinform}>

                  <TecnicalCharacteristics car={car} />
                  <CarListOptions item={car} />

                  <div className={styles.contentelem}>
                     <span className={styles.contentelemtitle}>
                        Description:
                     </span>
                     <span className={styles.contentbox}>
                        {car.description}
                     </span>
                  </div>
                  <div className={styles.contentelem}>
                     <span className={styles.contentelemtitle}>
                        Price:
                     </span>
                     <span className={styles.contentbox}>
                        {car.price} руб
                     </span>
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
      </section>
   );
}

export default InformAboutCar;