import * as React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import styles from '../../styles/components/Form/FormMain.module.scss'
import TitleForm from './TitleForm';
import { TextField, FormControlLabel, Checkbox } from '@mui/material';
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form } from 'react-bootstrap';
import FileInput from './FileInput/FileInput';
import OptionsForm from './Form/OptionsForm/OptionsFotm';
import { schema } from './shema/Shema';
import Specifications from './Form/Specifications/Specifications';
import { CarsItemDataType, CarsItemType } from '../../store/action-creator/cars';
import { addNewCartCar, changeCartCar, createNewCardCar } from '../../store/redusers/stateReduser';
import { useState } from 'react';
import { useRouter } from 'next/router';

interface FormMainProp {
   visible: boolean;
   setVisible: Function,
   keywords: string,
   car: CarsItemType | any
}

const FormMain: React.FC<FormMainProp> = ({ visible, setVisible, keywords, car }) => {
   const [dataItem, setDataItem] = useState<CarsItemType>(car)
   const { query } = useRouter()
   const { register, handleSubmit, formState: { errors }, control, reset } = useForm({
      mode: "onBlur",
      resolver: yupResolver(schema),
      defaultValues: {
         specifications: dataItem?.technical_characteristics?.productionYear != undefined ? true : false,
         files: dataItem?.images,
         markCar: dataItem?.name,
         descriptionCar: dataItem?.description,
         Price: dataItem?.price,
         Mail: dataItem?.contacts,
         options: dataItem?.options,
         MarkCar: dataItem?.technical_characteristics?.brand,
         Model: dataItem?.technical_characteristics?.model,
         year: dataItem?.technical_characteristics?.productionYear,
         Body: dataItem?.technical_characteristics?.body,
         Mileage: dataItem?.technical_characteristics?.mileage
      }
   })

   const specifications = useWatch({ control, name: "specifications" })

   const onSubmit = (data: CarsItemDataType | any) => {
      const newCar: CarsItemType = createNewCardCar(data)
      if (keywords != 'change') {
         addNewCartCar(newCar)
         reset()
      } else {
         changeCartCar(query, data)
      }
      window.location.reload()
      setVisible(false)
   }

   if (!visible) { return (<></>) }
   return (
      <div className={styles.containerform} onClick={() => setVisible(false)}>
         <div className={styles.container} onClick={(e) => e.stopPropagation()}>
            <TitleForm keywords={keywords} setVisible={setVisible} />
            <Form
               onSubmit={handleSubmit(onSubmit)}
            >
               <TextField
                  {...register('markCar')}
                  type='text'
                  id='markCar'
                  label="Mark Car"
                  name="markCar"
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  error={!!errors.markCar}
                  helperText={`${errors?.markCar?.message || ''}`}
               />
               <TextField
                  {...register('descriptionCar')}
                  className={styles.textarea}
                  id='descriptionCar'
                  name="descriptionCar"
                  multiline
                  label={'Description Car'}
                  margin='normal'
                  variant='filled'
                  rows={3}
                  error={!!errors.descriptionCar}
                  helperText={`${errors?.descriptionCar?.message || ''}`}
               />
               <TextField
                  {...register('Price')}
                  type='text'
                  id='Price'
                  label="Price"
                  name="Price"
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  error={!!errors.Price}
                  helperText={`${errors?.Price?.message || ''}`}
               />
               <TextField
                  {...register('Mail')}
                  type='text'
                  id='Mail'
                  label="Mail"
                  name="Mail"
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  error={!!errors.Mail}
                  helperText={`${errors?.Mail?.message || ''}`}
               />
               <FileInput
                  keywords={keywords}
                  name='files'
                  control={control}
                  errors={errors}
               />
               <FormControlLabel
                  control={
                     <Checkbox
                        {...register('specifications')}
                        color='primary'
                        defaultChecked={dataItem?.technical_characteristics?.productionYear != undefined ? true : false}
                     />
                  }
                  label='Do you have a specifications'
               />
               {specifications && (
                  <Specifications
                     errors={errors}
                     register={register}
                  />
               )}
               <OptionsForm
                  control={control}
                  register={register}
               />
               <Button
                  type='submit'
               >
                  submit
               </Button>
            </Form>
         </div>
      </div>
   );
}

export default FormMain;

