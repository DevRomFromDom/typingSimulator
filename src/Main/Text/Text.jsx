import React, { useEffect, useRef, useState } from 'react';
import styles from './Text.module.scss';
import Letter from './Letter/Letter';

const Text = () => {
    const [text, setText] = useState([]);
    const [passedText, setPassedText] = useState([]);
    const [activeText, setActiveText] = useState([]);
    const [defaultText, setDefaultText] = useState([]);
    const [changeIndex, setChangeIndex] = useState(0);
    const [status, setStatus] = useState('active');
    const [correctCount, setCorrectCount] = useState(0);
    const [mistakeCount, setMistakeCount] = useState(0);
    const inputRef = useRef();

    const getText = async (e) => {
        try {
            const newText = async () => {
                const res = await fetch('https://fish-text.ru/get?&type=paragraph&number=3&type=json');
                const data = res.json();
                return data;
            };
            newText().then((data) => {
                console.log(data.text);
                setText(data.text.split(''));
                setChangeIndex(0);
                setStatus('active');
                inputRef.current.focus();
            });
        } catch (e) {
            console.log('error');
        }
    };
    useEffect(() => {
        const useKeyPress = (e) => {
            inputRef.current.focus();
            if (e.key === activeText[0]) {
                changeLetter();
            }
            if (e.key !== activeText[0] && text !== []) {
                mistake();
            } 
        };
        const useTabDown = (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                inputRef.current.focus();
            }
        };
        document.addEventListener('keypress', useKeyPress);
        document.addEventListener('keydown', useTabDown);
        return () => {
            document.removeEventListener('keypress', useKeyPress);
            document.removeEventListener('keydown', useTabDown);
        };
    }, [activeText]);

    useEffect(() => {
        setPassedText(text.slice(0, changeIndex));
        setActiveText(text.slice(changeIndex, changeIndex + 1));
        setDefaultText(text.slice(changeIndex + 1));
    }, [text, changeIndex]);

    const changeLetter = () => {
        setCorrectCount(correctCount + 1);
        setChangeIndex(changeIndex + 1);
        setStatus('active');
    };

    const mistake = () => {
        setStatus('mistake');
        setMistakeCount(mistakeCount + 1);
    };
    return (
        <div>
            <button onClick={getText}>Get text</button>
            <input type="text" ref={inputRef} className={styles.input} />
            <div className={styles.text}>
                {passedText !== '' ? (
                    passedText.map((el, index) => {
                        return <Letter value={el} key={index} style={'passed'} />;
                    })
                ) : (
                    <div></div>
                )}
                {activeText !== '' ? (
                    activeText.map((el, index) => {
                        return <Letter value={el} key={index} style={status} />;
                    })
                ) : (
                    <div></div>
                )}
                {defaultText !== '' ? (
                    defaultText.map((el, index) => {
                        return <Letter value={el} key={index} style={'default'} />;
                    })
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};
export default Text;
