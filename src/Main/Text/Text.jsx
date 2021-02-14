import React, { useState } from 'react';
import styles from './Text.module.scss';
import Word from './Word/Word';

const Text = () => {
    const [text, setText] = useState('');
    const [activeLetter, setActiveLetter] = useState(0);
    const [activeWord, setActiveWord] = useState(0);
    const getText = async () => {
        setActiveWord(0);
        setText('');
        try {
            const newText = async () => {
                const res = await fetch('https://fish-text.ru/get?&type=paragraph&number=3&type=json');
                const data = res.json();
                return data;
            };
            newText().then((data) => {
                console.log(data.text);
                setText(data.text);
            });
        } catch (e) {
            console.log('error');
        }
    };
    const changeWord = () => {
        setActiveWord(activeWord + 1);
    };
    const changeLetter = () => {
        setActiveLetter(activeLetter + 1);
        if (activeLetter > arrText[activeWord].length-1) {
            console.log('x');
            setActiveWord(activeWord + 1);
            setActiveLetter(0);
        }
    };

    const arrText = text.split(' ');
    const act = arrText[activeWord];
    console.log(act, act.length);

    // console.log(arrText);
    return (
        <div>
            <div className={styles.text}>
                {text !== '' ? (
                    arrText.map((el, index) => {
                        return (
                            <Word
                                value={el + ' '}
                                key={index}
                                indexWord={index}
                                activeWord={activeWord}
                                activeLetter={activeLetter}
                            />
                        );
                    })
                ) : (
                    <div>No text</div>
                )}
            </div>
            <button onClick={getText}>Get text</button>
            <button onClick={changeWord}>change word</button>
            <button onClick={changeLetter}> change letter</button>
        </div>
    );
};
export default Text;
