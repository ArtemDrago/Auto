import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';
import A from '../../components/A/A';
import InformAboutCar from '../../components/CarsCard/FullScrinPage/InformAboutCar';
import FormMain from '../../components/form/FormMain';
import MainContainer from '../../components/MainContainer';
import { CarsItemType } from '../../store/action-creator/cars';
import { deliteCartCar } from '../../store/redusers/stateReduser';
import styles from '../../styles/pages/cars/[id].module.scss'

interface CarProps {
   car: CarsItemType
}

const Car: React.FC<CarProps> = ({ car }) => {
   const [visible, setVisible] = useState(false)

   const ChageAd = () => {
      setVisible(true)
   }

   const DeliteAd = (id: number) => {
      deliteCartCar(id)
   }
   return (
      <MainContainer keywords={car.name}>
         <FormMain visible={visible} setVisible={setVisible} keywords={'change'} car={car} />
         <div >
            <div className={styles.btncontainer}>
               <A href={'/cars'} text={'Back'} />
               <button
                  className={styles.btn}
                  onClick={() => ChageAd()}
               >
                  Cange
               </button>
               <button
                  className={styles.btn}
                  onClick={() => DeliteAd(+car.id)}
               >
                  <Link href={'/cars'} >
                     <span>Delite</span>
                  </Link>
               </button>
            </div>
            <InformAboutCar car={car} />
         </div>
      </MainContainer>
   );
}

export default Car;
export const getServerSideProps = async ({ params }: any) => {
   const response = await fetch(`http://localhost:3001/cars/${params.id}`)
   const car = await response.json()
   return {
      props: { car }, // will be passed to the page component as props
   }
}