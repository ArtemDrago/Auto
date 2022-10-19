import * as React from 'react';
import { Paper } from '@mui/material';
import { Controller, FieldErrorsImpl } from 'react-hook-form';
import Dropzone from "react-dropzone";
import CloudUpload from "@mui/icons-material/CloudUpload";
import styles from '../../../styles/components/FileInput/FileInput.module.scss'
import { ErrorMessage } from '@hookform/error-message';
import { CarsItemType } from '../../../store/action-creator/cars';
import ImgList from './ImgList';

interface FileInputProp {
   control: any,
   name: string,
   errors: FieldErrorsImpl<CarsItemType>
}
const FileInput: React.FC<FileInputProp> = ({ control, name, errors }) => {

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
               <div className={styles.listImg}>
                  <ImgList value={value} />
                  <ErrorMessage errors={errors} name={name} render={() =>
                     <p className={styles.fileValidation}>
                        You need to add at least one file
                     </p>}
                  />
               </div>
            </>}
      />
   );
}

export default FileInput;