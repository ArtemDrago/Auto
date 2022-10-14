import * as React from 'react';
import { ListItemText, Paper } from '@mui/material';
import { Controller, FieldErrorsImpl } from 'react-hook-form';
import Dropzone from "react-dropzone";
import CloudUpload from "@mui/icons-material/CloudUpload";
import styles from '../../../styles/components/FileInput/FileInput.module.scss'
import { ErrorMessage } from '@hookform/error-message';

interface FileInputProp {
   control: any,
   name: string,
   keywords: string,
   errors: FieldErrorsImpl<{
      specifications: boolean;
      files: string[];
      markCar: string;
      descriptionCar: string;
      Price: string;
      Mail: string;
      options: NonNullable<any[] | string[]>;
      MarkCar: string;
      Model: string;
      year: string;
      Body: string;
      Mileage: string;
   }>
}
const FileInput: React.FC<FileInputProp> = ({ control, name, keywords, errors }) => {

   return (
      <Controller
         control={control}
         name={name}
         render={({ field: { onBlur, onChange, value } }) =>
            <>
               <Dropzone
                  onDrop={onChange}
               >
                  {({ getRootProps, getInputProps }) => (
                     <Paper
                        className={styles.dropzone}
                        variant='outlined'
                        {...getRootProps()}
                     >
                        <CloudUpload
                           className={styles.icon}
                           style={{ fontSize: '40px' }}
                        />
                        <input
                           {...getInputProps()}
                           name={name}
                           onBlur={onBlur}
                        />
                        <p>
                           Drag 'n' drop files here, or click to select files
                        </p>
                     </Paper>)
                  }
               </Dropzone>
               {keywords === 'change' ?
                  <div>
                     {value.map((f: any, index: number) =>
                        <div key={index} className={styles.listImg}>
                           <img src={f} className={styles.file} />
                        </div>
                     )}
                  </div>
                  :
                  <div className={styles.listImg}>
                     {value && value.map((f: any, index: number) => (
                        <div
                           key={index}
                           className={styles.list}
                        >
                           <div className={styles.fileBox} >
                              <img
                                 src={f ? URL.createObjectURL(f) : ''}
                                 className={styles.file}
                              />
                           </div>
                           <ListItemText
                              primary={f.path}
                              secondary={f.size}
                           />
                        </div>
                     ))}
                     <ErrorMessage errors={errors} name={name} render={() =>
                        <p className={styles.fileValidation}>
                           You need to add at least one file
                        </p>}
                     />
                  </div>
               }
            </>}
      />
   );
}

export default FileInput;