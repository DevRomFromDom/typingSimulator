import React, { useState } from 'react';
import styles from './Word.module.scss';
import { Letter } from './Letter';

const Word = ({ value, indexWord, activeWord, activeLetter }) => {
    const arrLetters = value.split('');

    return (
        <span className={styles.word}>
            {arrLetters ? (
                arrLetters.map((el, index) => {
                    return (
                        <Letter
                            value={el}
                            key={index}
                            indexLetter={index}
                            indexWord={indexWord}
                            activeLetter={activeLetter}
                            activeWord={activeWord}
                        />
                    );
                })
            ) : (
                <div>x</div>
            )}
        </span>
    );
};
export default Word;
