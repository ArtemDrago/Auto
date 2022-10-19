import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { CarsItemType } from '../action-creator/cars';

export const addNewCartCar = async (newCar: CarsItemType) => {
   const response = await axios.post(`http://localhost:3001/cars`, { ...newCar })
}

export const changeCartCar = async (query: ParsedUrlQuery, data: CarsItemType) => {
   const response = await axios.put(`http://localhost:3001/cars/${query.id}`, {
      "images": data.images,
      "name": data.name,
      "description": data.description,
      "price": data.price,
      "contacts": data.contacts,
      "technical_characteristics": {
         "brand": data.technical_characteristics.brand,
         "model": data.technical_characteristics.model,
         "productionYear": data.technical_characteristics.productionYear,
         "body": data.technical_characteristics.body,
         "mileage": data.technical_characteristics.mileage
      },
      "options": data.options
   })
}

export const takeCartCar = async (params: string | string[] | undefined) => {
   const response = await fetch(`http://localhost:3001/cars/${params}`)
   const car: CarsItemType = await response.json()
   return car
}

export const deliteCartCar = async (id: number) => {
   const response = await axios.delete(`http://localhost:3001/cars/${id}`)
}

export const createNewCardCar = (data: CarsItemType) => {
   const newCardCar = {
      "id": +new Date(),
      "images": data.images,
      "name": data.name,
      "description": data.description,
      "price": data.price,
      "contacts": data.contacts,
      "technical_characteristics": {
         "car_id": +new Date() + 2331,
         "brand": data.technical_characteristics.brand,
         "model": data.technical_characteristics.model,
         "productionYear": data.technical_characteristics.productionYear,
         "body": data.technical_characteristics.body,
         "mileage": data.technical_characteristics.mileage
      },
      "options": data.options,
   }
   return newCardCar
}

export const objectToArr = (data: string[] | any[]) => {
   const optionArr: string[] | any = []
   const curArr = Object.values(data)

   curArr.forEach((item: any) => {
      optionArr.push(Object.values(item)[0])
   })
   return optionArr
}