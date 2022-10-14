import * as React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import styles from '../../../styles/components/filter/MainFilter.module.scss'
import FromToInput from './FromToInput';

interface MainFilterProp {
   setOpentFilter: Function,
   setFilterParams: Function
}

const MainFilter: React.FC<MainFilterProp> = ({ setOpentFilter, setFilterParams }) => {
   const [inputMark, setInputMark] = useState('')
   const [inputModel, setInputModel] = useState('')
   const [inputYear, setInputYear] = useState('')
   const [inputBody, setInputBody] = useState('')
   const [inputMill, setInputMill] = useState({ from: '0', to: '' })
   const [inputPrice, setInputPrice] = useState({ from: '0', to: '' })

   const urlQuery = () => {
      setOpentFilter(false)
      setFilterParams({
         brand: inputMark,
         model: inputModel,
         productionYear: inputYear,
         body: inputBody,
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
               value={inputMark}
               onChange={(e) => setInputMark(e.target.value)}
               placeholder='Mark...'
               className={styles.bodyinput}
            />
            <Form.Control
               value={inputModel}
               onChange={(e) => setInputModel(e.target.value)}
               placeholder='Model...'
               className={styles.bodyinput}
            />
            <Form.Control
               value={inputYear}
               onChange={(e) => setInputYear(e.target.value)}
               placeholder='Year...'
               className={styles.bodyinput}
            />
            <Form.Control
               value={inputBody}
               onChange={(e) => setInputBody(e.target.value)}
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