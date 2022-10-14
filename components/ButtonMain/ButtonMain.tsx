import Link from 'next/link';
import * as React from 'react';
import { Button } from 'react-bootstrap'
import styles from '../../styles/components/ButtonMain/ButtonMain.module.scss'

interface ButtonMainProp {
   href: string,
   text: string
}

const ButtonMain: React.FC<ButtonMainProp> = ({ href, text }) => {
   return (
      <Link href={href}>
         <Button className={styles.btn}>
            <span className={styles.link}>
               {text}
            </span>
         </Button>
      </Link>
   );
}

export default ButtonMain;