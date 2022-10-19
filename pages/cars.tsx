import React, { useEffect, useMemo, useState } from 'react';
import { Card } from 'react-bootstrap';
import CarItem from '../components/CarsCard/CarItem';
import { state } from '../components/HeaderContent/filter/stateFilter/stateFilter';
import HeaderContent from '../components/HeaderContent/HeaderContent';
import MainContainer from '../components/MainContainer';
import { useFilterCars } from '../hooks/useCreateUrl';
import { CarsItemType } from '../store/action-creator/cars';
import styles from '../styles/pages/cars/cars.module.scss'

interface interfaceCars {
   cars: CarsItemType[]
}

const Cars: React.FC<interfaceCars> = ({ cars }) => {
   const [carList, setCarList] = useState<CarsItemType[]>(cars || [])
   const [Url, setUrl] = useState('')
   const [filterParams, setFilterParams] = useState(state)

   useEffect(() => {
      setCarList(cars)
   }, [cars])

   useEffect(() => {
      setUrl(useFilterCars(filterParams))
   }, [filterParams])

   useEffect(() => {
      fethingFilterCar()
   }, [filterParams, Url])

   const fethingFilterCar = async () => {
      const response = await fetch(`http://localhost:3001/cars${Url}`)
      const cars: CarsItemType[] = await response.json()
      setCarList(cars)
   }

   const resetFilter = () => {
      setCarList(cars)
      setFilterParams(state)
   }

   return (
      <MainContainer keywords='Cars'>
         <HeaderContent
            setFilterParams={setFilterParams}
            resetFilter={resetFilter}
            filterParams={filterParams}
         >
            {carList.length != 0
               ?
               <ul className={styles.list}>
                  {carList.map((item: CarsItemType) =>
                     <CarItem item={item} key={item.id} />
                  )}
               </ul>
               :
               <Card.Title className={styles.notfound}>
                  Nothing is found
               </Card.Title>
            }
         </HeaderContent>
      </MainContainer>
   );
}

export default Cars;
export async function getServerSideProps({ }) {
   const response = await fetch(`http://localhost:3001/cars`)
   const cars = await response.json()
   return {
      props: { cars }, // will be passed to the page component as props
   }
}
