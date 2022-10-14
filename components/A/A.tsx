import { Button } from "react-bootstrap";
import Link from "next/link";
import * as React from 'react';
import styles from '../../styles/components/A/A.module.scss'


interface AProps {
   text: String,
   href: string
}

const A: React.FC<AProps> = ({ text, href }) => {
   return (
      <Link href={href}>
         <Button className={styles.btn}>
            <span >
               {text}
            </span>
         </Button>
      </Link>
   );
}

export default A;