import * as React from 'react';
import { TextField } from '@mui/material';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { CarsItemType } from '../../../../store/action-creator/cars';

interface SpecificationsProp {
   register: UseFormRegister<any>,
   errors: FieldErrorsImpl<CarsItemType>
}

const Specifications: React.FC<SpecificationsProp> = ({ register, errors }) => {
   return (
      <div>
         <TextField
            {...register('technical_characteristics.brand')}
            type='text'
            id='technical_characteristics.brand'
            label="Mark Car"
            name="technical_characteristics.brand"
            variant='outlined'
            margin='normal'
            fullWidth
            error={!!errors.technical_characteristics?.brand}
            helperText={`${errors?.technical_characteristics?.brand?.message || ''}`}
         />
         <TextField
            {...register('technical_characteristics.model')}
            type='text'
            id='technical_characteristics.model'
            label="Model"
            name="technical_characteristics.model"
            variant='outlined'
            margin='normal'
            fullWidth
            error={!!errors.technical_characteristics?.model}
            helperText={`${errors?.technical_characteristics?.model?.message || ''}`}
         />
         <TextField
            {...register('technical_characteristics.productionYear')}
            type='text'
            id='technical_characteristics.productionYear'
            label="year"
            name="technical_characteristics.productionYear"
            variant='outlined'
            margin='normal'
            fullWidth
            error={!!errors.technical_characteristics?.productionYear}
            helperText={`${errors?.technical_characteristics?.productionYear?.message || ''}`}
         />
         <TextField
            {...register('technical_characteristics.body')}
            type='text'
            id='technical_characteristics.body'
            label="Body"
            name="technical_characteristics.body"
            variant='outlined'
            margin='normal'
            fullWidth
            error={!!errors.technical_characteristics?.body}
            helperText={`${errors?.technical_characteristics?.body?.message || ''}`}
         />
         <TextField
            {...register('technical_characteristics.mileage')}
            type='text'
            id='technical_characteristics.mileage'
            label="Mileage"
            name="technical_characteristics.mileage"
            variant='outlined'
            margin='normal'
            fullWidth
            error={!!errors.technical_characteristics?.mileage}
            helperText={`${errors?.technical_characteristics?.mileage?.message || ''}`}
         />
      </div>
   );
}

export default Specifications;