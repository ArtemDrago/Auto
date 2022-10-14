import * as React from 'react';
import { useFieldArray, UseFormRegister } from 'react-hook-form';
import styles from '../../../../styles/components/Form/OptionsForm.module.scss'
import { TextField } from '@mui/material';

interface OptionsFormProp {
   control: any,
   register: UseFormRegister<any>,
}

const OptionsForm: React.FC<OptionsFormProp> = ({ register, control }) => {
   const { fields, append, remove } = useFieldArray({
      control,
      name: "options"
   });

   return (
      <div className={styles.container}>
         <ul className={styles.list}>
            {fields.map((item, index) => (
               <li key={item.id} className={styles.listItem}>
                  <TextField
                     {...register(`options.${index}.options`)}
                     className={styles.input}
                     placeholder={'option...'}
                     type='text'
                     label="Option"
                     variant='outlined'
                     margin='normal'
                     fullWidth
                  />
                  <button
                     className={styles.btn}
                     type="button"
                     onClick={() => remove(index)}
                  >
                     Delete
                  </button>
               </li>
            ))}
         </ul>
         <button
            className={styles.btn}
            type="button"
            onClick={() => append({})}
         >
            append
         </button>
      </div>
   );
}

export default OptionsForm;