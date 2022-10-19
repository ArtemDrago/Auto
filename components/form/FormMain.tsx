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
import { CarsItemType } from '../../store/action-creator/cars';
import { addNewCartCar, changeCartCar, createNewCardCar } from '../../store/redusers/stateReduser';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { DefultValues } from './DefaultValues';

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
      defaultValues: DefultValues(dataItem)
   })
   const specifications = useWatch({ control, name: "technical_characteristics.specifications" })

   const onSubmit = (data: CarsItemType) => {
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
                  {...register('name')}
                  type='text'
                  id='name'
                  label="Mark Car"
                  name="name"
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  error={!!errors.name}
                  helperText={`${errors?.name?.message || ''}`}
               />
               <TextField
                  {...register('description')}
                  className={styles.textarea}
                  id='description'
                  name="description"
                  multiline
                  label={'Description Car'}
                  margin='normal'
                  variant='filled'
                  rows={3}
                  error={!!errors.description}
                  helperText={`${errors?.description?.message || ''}`}
               />
               <TextField
                  {...register('price')}
                  type='text'
                  id='price'
                  label="Price"
                  name="price"
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  error={!!errors.price}
                  helperText={`${errors?.price?.message || ''}`}
               />
               <TextField
                  {...register('contacts')}
                  type='text'
                  id='contacts'
                  label="Mail"
                  name="contacts"
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  error={!!errors.contacts}
                  helperText={`${errors?.contacts?.message || ''}`}
               />
               <FileInput
                  name='images'
                  control={control}
                  errors={errors}
               />
               <FormControlLabel
                  control={
                     <Checkbox
                        {...register('technical_characteristics.specifications')}
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
