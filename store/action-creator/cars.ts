export interface CarsItemType {
   images: string[];
   name: string;
   description: string;
   price: string;
   contacts: string;
   technical_characteristics: {
      car_id: number | string;
      brand: string;
      model: string;
      productionYear: string;
      body: string;
      mileage: string;
   };
   options: string[] | any[];
   id: number | string;
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

