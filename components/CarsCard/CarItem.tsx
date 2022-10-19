import Link from 'next/link';
import * as React from 'react';
import { CarsItemType } from '../../store/action-creator/cars';
import styles from '../../styles/pages/cars/caritem.module.scss'
import CarListInform from './CarListInform';

interface CarItemProps {
   item: CarsItemType
}

const CarItem: React.FC<CarItemProps> = ({ item }) => {
   return (
      <li className={styles.item}>
         <div className={styles.content}>
            <div className={styles.images}>
               {item.images.map((f: any, index: number) =>
                  <div key={index} className={styles.img}>
                     {typeof (f) == 'string' ?
                        <img
                           src={f}
                           className={styles.image}
                           alt="img car"
                        />
                        :
                        <div
                           className={styles.image}
                        >
                           {f.path}
                        </div>
                     }
                  </div>
               )}
            </div>
            <div className={styles.inform}>
               <div className={styles.header}>
                  <Link href={`/cars/${item.id}`}>
                     <h3 className={styles.titleauto}>
                        {item.name}
                     </h3>
                  </Link>
                  <Link href={`/cars/${item.id}`}>
                     <button className={styles.btn}>
                        To car
                     </button>
                  </Link>
               </div>
               <CarListInform item={item} />
            </div>
         </div>
      </li>
   );
}

export default CarItem;