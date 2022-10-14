import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { CarsChangeType, CarsItemDataType, CarsItemType } from '../action-creator/cars';

export const addNewCartCar = async (newCar: CarsItemType) => {
   const response = await axios.post(`http://localhost:3001/cars`, { ...newCar })
}

export const changeCartCar = async (query: ParsedUrlQuery, data: CarsChangeType) => {
   const response = await axios.put(`http://localhost:3001/cars/${query.id}`, {
      "images": data.files,
      "name": data.markCar,
      "description": data.descriptionCar,
      "price": data.Price,
      "contacts": data.Mail,
      "technical_characteristics": {
         "brand": data.MarkCar,
         "model": data.Model,
         "productionYear": data.year,
         "body": data.Body,
         "mileage": data.Mileage
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

export const createNewCardCar = (data: CarsItemDataType | any) => {

   const newCardCar = {
      "id": +new Date(),
      "images": data.files,
      "name": data.markCar,
      "description": data.descriptionCar,
      "price": data.Price,
      "contacts": data.Mail,
      "technical_characteristics": {
         "car_id": +new Date() + 2331,
         "brand": data.markCar || 'No inform',
         "model": data.Model || 'No inform',
         "productionYear": data.year || 'No inform',
         "body": data.Body || 'No inform',
         "mileage": data.Mileage || 'No inform'
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