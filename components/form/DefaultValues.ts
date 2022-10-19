import { CarsItemType } from "../../store/action-creator/cars";

export const DefultValues = (dataItem: CarsItemType) => {
   return {
      id: dataItem?.id,
      images: dataItem?.images,
      name: dataItem?.name,
      description: dataItem?.description,
      price: dataItem?.price,
      contacts: dataItem?.contacts,
      options: dataItem?.options,
      technical_characteristics: {
         specifications: dataItem?.technical_characteristics?.productionYear != undefined ? true : false,
         car_id: dataItem?.technical_characteristics?.car_id,
         brand: dataItem?.technical_characteristics?.brand,
         model: dataItem?.technical_characteristics?.model,
         productionYear: dataItem?.technical_characteristics?.productionYear,
         body: dataItem?.technical_characteristics?.body,
         mileage: dataItem?.technical_characteristics?.mileage
      },
   }
}