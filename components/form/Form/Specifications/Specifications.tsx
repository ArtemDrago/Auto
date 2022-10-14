import * as React from 'react';
import { TextField } from '@mui/material';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

interface SpecificationsProp {
   register: UseFormRegister<any>,
   errors: FieldErrorsImpl<{ [x: string]: any; }>
}

const Specifications: React.FC<SpecificationsProp> = ({ register, errors }) => {
   return (
      <div>
         <TextField
            {...register('MarkCar')}
            type='text'
            id='MarkCar'
            label="Mark Car"
            name="MarkCar"
            variant='outlined'
            margin='normal'
            fullWidth
            error={!!errors.MarkCar}
            helperText={`${errors?.MarkCar?.message || ''}`}
         />
         <TextField
            {...register('Model')}
            type='text'
            id='Model'
            label="Model"
            name="Model"
            variant='outlined'
            margin='normal'
            fullWidth
            error={!!errors.Model}
            helperText={`${errors?.Model?.message || ''}`}
         />
         <TextField
            {...register('year')}
            type='text'
            id='year'
            label="year"
            name="year"
            variant='outlined'
            margin='normal'
            fullWidth
            error={!!errors.year}
            helperText={`${errors?.year?.message || ''}`}
         />
         <TextField
            {...register('Body')}
            type='text'
            id='Body'
            label="Body"
            name="Body"
            variant='outlined'
            margin='normal'
            fullWidth
            error={!!errors.Body}
            helperText={`${errors?.Body?.message || ''}`}
         />
         <TextField
            {...register('Mileage')}
            type='text'
            id='Mileage'
            label="Mileage"
            name="Mileage"
            variant='outlined'
            margin='normal'
            fullWidth
            error={!!errors.Mileage}
            helperText={`${errors?.Mileage?.message || ''}`}
         />

      </div>
   );
}

export default Specifications;