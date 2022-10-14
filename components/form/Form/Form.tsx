import * as React from 'react';
import styles from '../../../styles/components/Form/Form.module.scss'

interface FormProp {
   props: any,
   children: JSX.Element
}

const Form: React.FC<FormProp> = ({ props, children }) => {
   return (
      <form
         className={styles.form}
         noValidate
         {...props}
      >
         {children}
      </form>
   );
}

export default Form;