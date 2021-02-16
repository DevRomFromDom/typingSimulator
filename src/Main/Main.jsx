import React, { useState } from 'react';
import styles from './Main.module.scss';
import Text from './Text/Text';
import ModalComponent from './Modal/Modal';

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
            <Text start={start} language={language} textLanguage={textLanguage} />
            <ModalComponent startTest={startTest} start={start} language={language} textLanguage={textLanguage} />
        </div>
    );
};
export default Main;
