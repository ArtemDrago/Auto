import { ListItemText } from '@mui/material';
import * as React from 'react';
import styles from '../../../styles/components/FileInput/ImgList.module.scss'

interface ImgListProp {
   value: any
}

const ImgList: React.FC<ImgListProp> = ({ value }) => {
   return (
      <>
         {value && value.map((f: any, index: number) => (
            <section key={index}>
               {typeof (f) == 'object' ?
                  <div
                     key={index}
                     className={styles.list}
                  >
                     <div className={styles.fileBox} >
                        <img
                           src={f.name ? URL.createObjectURL(f) : f.path}
                           className={styles.file}
                           alt='img'
                        />
                     </div>
                     <ListItemText
                        style={{ width: '150px' }}
                        primary={f.path}
                        secondary={f.size}
                     />
                  </div>
                  :
                  <div className={styles.listImg}>
                     {value.map((f: any, index: number) =>
                        <div key={index} className={styles.shortlist}>
                           <img src={f} className={styles.file} />
                        </div>
                     )}
                  </div>
               }
            </section>
         ))}
      </>
   );
}

export default ImgList;