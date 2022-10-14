export interface CarsItemType {
   images: string[];
   name: string;
   description: string;
   price: string;
   contacts: string;
   technical_characteristics: {
      brand: string;
      model: string;
      productionYear: string;
      body: string;
      mileage: string;
   };
   options: string[] | any[];
   id: number | string;
}

export interface CarsItemDataType {
   images: string[];
   name: string;
   description: string;
   price: string;
   contacts: string;
   brand: string;
   model: string;
   productionYear: string;
   body: string;
   mileage: string;
   options: string[];
   id: number;
}
export interface CarsChangeType {
   Body: string;
   Mail: string
   MarkCar: string
   Mileage: string
   Model: string
   Price: string
   descriptionCar: string
   files: string[] | object[]
   markCar: string
   options: object[]
   year: string
   specifications: boolean
}

export interface FilterParamsProps {
   brand: string;
   model: string;
   productionYear: string;
   body: string;
   mileage: {
      from: string;
      to: string;
   };
   price: {
      from: string;
      to: string;
   }
}