import React, { useEffect, useState } from 'react';
import styles from './Letter.module.scss';

const Letter = ({ value, style }) => {
    const [status, setStatus] = useState('default');

    useEffect(() => {
        setStatus(style);
    }, [style]);

    if (status === 'mistake') {
        return <span className={styles.mistake}>{value}</span>;
    } else if (status === 'active') {
        return <span className={styles.active}>{value}</span>;
    } else if (status==='passed'){
          return <span className={styles.passed}>{value}</span>;
    } else{
        return <span className={styles.default}>{value}</span>;
    }
};

export default Letter;
