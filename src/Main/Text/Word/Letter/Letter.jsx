import React from 'react';
import styles from './Letter.module.scss';

const Letter = ({ value,indexLetter, indexWord, indexActive,wordLength }) => {
    let statys = 'none'
    //console.log(value, indexLetter, indexWord, indexActive,wordLength);
    if(indexWord===indexActive){
        statys = 'active';
    }
    
    if (statys === 'mistake'){;
        return <div className={styles.mistake}>{value}</div>;
    } else if (statys === 'active') {
        return <div className={styles.active}>{value}</div>;
    } else {
        return <div className={styles.letter}>{value}</div>;
    }
};
export default Letter;
