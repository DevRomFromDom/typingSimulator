import React, { useState } from 'react';
import styles from './Text.module.scss';
import Word from './Word/Word';

const Text = () => {
    const [text, setText] = useState('');
    const [activeWord,setActiveWord]=useState(0)
    const getText = async () => {
        setActiveWord(0)
        setText('')
        try {
            const newText = async () => {
                const res = await fetch('https://fish-text.ru/get?&type=paragraph&number=3&type=json');
                const data = res.json();
                return data;
            };
            newText().then((data) => {
                console.log(data.text)
                setText(data.text);
            });
        }catch(e){
            console.log("error")
        }
    };
    const changeWord =()=>{
        setActiveWord(activeWord +1)
    }

    
    const arrText = text.split(' ');
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
                                active={activeWord}
                                wordLength={el.length}
                            />
                        );
                    })
                ) : (
                    <div>No text</div>
                )}
            </div>
            <button onClick={getText}>Get text</button>
            <button onClick={changeWord}>change word</button>
        </div>
    );
};
export default Text;
