import * as React from 'react';
import { Form } from 'react-bootstrap';
import styles from '../../../styles/components/filter/FromToInput.module.scss'

interface FromToInputProp {
   value: {
      from: string;
      to: string;
   },
   setValue: Function
}

const FromToInput: React.FC<FromToInputProp> = ({ value, setValue }) => {
   return (
      <div className={styles.blockinput}>
         From :
         <Form.Control
            value={value.from}
            onChange={(e: any) => setValue({ ...value, from: `${e.target.value}` })}
            placeholder='From...'
            className={styles.boxinput}
         />
         To :
         <Form.Control
            value={value.to}
            onChange={(e: any) => setValue({ ...value, to: `${e.target.value}` })}
            placeholder='To...'
            className={styles.boxinput}
         />
      </div>
   );
}

export default FromToInput;