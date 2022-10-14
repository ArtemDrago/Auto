import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import CarItem from '../components/CarsCard/CarItem';
import HeaderContent from '../components/HeaderContent/HeaderContent';
import MainContainer from '../components/MainContainer';
import useCreateUrl from '../hooks/useCreateUrl';
import { CarsItemType } from '../store/action-creator/cars';
import styles from '../styles/pages/cars/cars.module.scss'

interface interfaceCars {
   cars: CarsItemType[]
}

const Cars: React.FC<interfaceCars> = ({ cars }) => {
   const [carList, setCarList] = useState(cars || [])
   const [Url, setUrl] = useState('')
   const [filterParams, setFilterParams] = useState({
      brand: "",
      model: "",
      productionYear: "",
      body: "",
      mileage: {
         from: '',
         to: ''
      },
      price: {
         from: '',
         to: ''
      },
   })

   useEffect(() => {
      setCarList(cars)
   }, [cars])

   useEffect(() => {
      const key = Object.keys(filterParams)
      const value = Object.values(filterParams)
      const curUrl = useCreateUrl(value, key)
      setUrl(curUrl)
   }, [filterParams])

   useEffect(() => {
      fethingFilterCar()
   }, [filterParams, Url])

   const fethingFilterCar = async () => {
      const response = await fetch(`http://localhost:3001/cars${Url}`)
      const cars = await response.json()
      setCarList(cars)
   }

   const resetFilter = () => {
      setCarList(cars)
   }

   return (
      <MainContainer keywords='Cars'>
         <HeaderContent
            setFilterParams={setFilterParams}
            resetFilter={resetFilter}
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
