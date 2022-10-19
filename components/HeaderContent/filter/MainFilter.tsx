import * as React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FilterParamsProps } from '../../../store/action-creator/cars';
import styles from '../../../styles/components/filter/MainFilter.module.scss'
import FromToInput from './FromToInput';

interface MainFilterProp {
   setOpentFilter: Function,
   setFilterParams: Function,
   filterParams: FilterParamsProps
}

const MainFilter: React.FC<MainFilterProp> = ({ setOpentFilter, setFilterParams, filterParams }) => {
   const [inputMill, setInputMill] = useState(filterParams.mileage)
   const [inputPrice, setInputPrice] = useState(filterParams.price)

   const urlQuery = () => {
      setOpentFilter(false)
      setFilterParams({
         brand: filterParams.brand,
         model: filterParams.model,
         productionYear: filterParams.productionYear,
         body: filterParams.body,
         mileage: {
            from: inputMill.from,
            to: inputMill.to
         },
         price: {
            from: inputPrice.from,
            to: inputPrice.to
         },
      })
   }

   return (
      <div className={styles.filterbox}>
         <div className={styles.headblock}>
            <Button
               className={styles.closebtn}
               onClick={() => setOpentFilter(false)}
            >
               X
            </Button>
         </div>
         <div className={styles.bodyblock}>
            <Form.Control
               value={filterParams.brand}
               onChange={(e) => setFilterParams({ ...filterParams, brand: e.target.value })}
               placeholder='Mark...'
               className={styles.bodyinput}
            />
            <Form.Control
               value={filterParams.model}
               onChange={(e) => setFilterParams({ ...filterParams, model: e.target.value })}
               placeholder='Model...'
               className={styles.bodyinput}
            />
            <Form.Control
               value={filterParams.productionYear}
               onChange={(e) => setFilterParams({ ...filterParams, productionYear: e.target.value })}
               placeholder='Year,****'
               className={styles.bodyinput}
            />
            <Form.Control
               value={filterParams.body}
               onChange={(e) => setFilterParams({ ...filterParams, body: e.target.value })}
               placeholder='Body...'
               className={styles.bodyinput}
            />

            <div className={styles.blockchange}>
               <div className={styles.blocktitle}> Milleges:</div>
               <FromToInput value={inputMill} setValue={setInputMill} />
            </div>
            <div className={styles.blockchange}>
               <div className={styles.blocktitle}> Price:</div>
               <FromToInput value={inputPrice} setValue={setInputPrice} />
            </div>
         </div>
         <Button
            onClick={() => urlQuery()}
         >
            Change
         </Button>
      </div>
   );
}

export default MainFilter;