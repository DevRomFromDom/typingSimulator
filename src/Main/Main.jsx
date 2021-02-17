import React, { useState } from 'react';
import styles from './Main.module.scss';
import Text from './Text/Text';



const Main = () => {
    const [start, setStart] = useState(false);
    const [language, setLanguage] = useState('Russian layout');
    const startTest = () => {
        setStart(!start);
    };
    const textLanguage = (e) => {
        setLanguage(e.target.text);
    };
    return (
        <div className={styles.main}>
            <Text start={start} startTest={startTest} language={language} textLanguage={textLanguage} />      
        </div>
    );
};
export default Main;
