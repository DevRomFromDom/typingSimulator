import React, { useState } from 'react';
import styles from './Main.module.scss';
import Text from './Text/Text';

const Main = () => {
    const [start, setStart] = useState(false);
    const [language, setLanguage] = useState('Russian');
    const startTest = () => {
        setStart(!start);
    };
    return (
        <div className={styles.main}>
            <Text start={start} startTest={startTest} language={language} setLanguage={setLanguage} />
        </div>
    );
};
export default Main;
