import React from 'react';
import styles from './Letter.module.scss';

const Letter = ({ value, style }) => {
    if (style === 'mistake') {
        return <span className={styles.mistake}>{value}</span>;
    } else if (style === 'active') {
        return <span className={styles.active}>{value}</span>;
    } else if (style === 'passed') {
        return <span className={styles.passed}>{value}</span>;
    } else {
        return <span className={styles.default}>{value}</span>;
    }
};

export default Letter;
