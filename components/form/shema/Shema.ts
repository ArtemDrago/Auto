import * as yup from "yup";

export const schema = yup.object().shape({
   name: yup
      .string()
      .min(2, "Mark car should not contain numbers")
      .required("The name of the car is at least 2 characters long"),
   price: yup
      .string()
      .matches(/^\d+$/, "The price must contain only numbers")
      .required("Price is a required field"),
   contacts: yup
      .string()
      .email("Email should have correct format")
      .required("Mail is a required field"),
   images: yup
      .mixed()
      .required('File is required'),
   description: yup
      .string()
      .min(20, 'Must be exactly 20 characters')
      .required("Body is a required field"),

   technical_characteristics: yup.object().shape({
      specifications: yup.boolean(),
      brand: yup
         .string().when('specifications', {
            is: true,
            then: yup
               .string()
               .min(5, 'Must be exactly 5 characters')
               .required("Mark Car is a required field"),
         }),
      model: yup
         .string().when('specifications', {
            is: true,
            then: yup
               .string()
               .min(3, 'Must be exactly 3 characters')
               .required("Model is a required field"),
         }),
      productionYear: yup
         .string().when('specifications', {
            is: true,
            then: yup
               .string()
               .matches(/^\d{4}$/, "The price must contain year")
               .required("year is a required field"),
         }),
      body: yup
         .string().when('specifications', {
            is: true,
            then: yup
               .string()
               .min(3, 'Must be exactly 3 characters')
               .required("Body is a required field"),
         }),
      mileage: yup
         .string().when('specifications', {
            is: true,
            then: yup
               .string()
               .matches(/^\d+$/, "The price must contain only numbers")
               .required("Mileage is a required field"),
         }),
   }),



})