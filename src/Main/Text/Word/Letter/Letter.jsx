import React, { useEffect, useState } from 'react';
import styles from './Letter.module.scss';

export const Letter = ({ value, indexLetter, indexWord, activeWord, activeLetter }) => {
    const [status, setStatus] = useState('none');
    // const [statys,setStatys]=useState('none')

    // console.log(value, indexLetter, indexWord, activeWord, activeLetter);
    useEffect(() => {
        if ((indexLetter === activeLetter) & (indexWord === activeWord)) {
            setStatus('active');
        }
    }, [indexLetter, indexWord, activeWord, activeLetter]);

    if (status === 'mistake') {
        return <span className={styles.mistake}>{value}</span>;
    } else if (status === 'active') {
        return <span className={styles.active}>{value}</span>;
    } else {
        return <span className={styles.letter}>{value}</span>;
    }
};

export const t = 1;
