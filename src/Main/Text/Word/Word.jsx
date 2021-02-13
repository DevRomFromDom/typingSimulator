import React, { useState } from 'react';
import styles from './Word.module.scss';
import Letter from './Letter/Letter';

const Word = ({ value, indexWord, active, wordLength }) => {
    const [word, setWord] = useState(value);
    // console.log(word, indexWord, active);
    const arrLetters = word.split('');

    return (
        <div className={styles.word}>
            {arrLetters ? (
                arrLetters.map((el, index) => {
                    return (
                        <Letter
                            value={el}
                            key={index}
                            indexLetter={index}
                            indexWord={indexWord}
                            indexActive={active}
                            wordLength={wordLength}
                        />
                    );
                })
            ) : (
                <div>x</div>
            )}
        </div>
    );
};
export default Word;
