import React, { useEffect, useRef, useState } from 'react';
import styles from './Text.module.scss';
import Letter from './Letter/Letter';

const Text = () => {
    const [text, setText] = useState([]);
    const [time, setTime] = useState(0);
    const [passedText, setPassedText] = useState([]);
    const [activeText, setActiveText] = useState([]);
    const [defaultText, setDefaultText] = useState([]);
    const [changeIndex, setChangeIndex] = useState(0);
    const [status, setStatus] = useState('active');
    const [correctCount, setCorrectCount] = useState(0);
    const [mistakeCount, setMistakeCount] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    const inputRef = useRef();

    const getText = async (e) => {
        try {
            const newText = async () => {
                const res = await fetch('https://fish-text.ru/get?&type=paragraph&number=3&type=json');
                const data = res.json();
                return data;
            };
            newText().then((data) => {
                setChangeIndex(0);
                setStatus('active');
                setSpeed(0);
                setAccuracy(100);
                setCorrectCount(0);
                setMistakeCount(0);
                setText(data.text.split(''));

                inputRef.current.focus();
            });
        } catch (e) {
            console.log('error');
        }
    };
    useEffect(() => {
        setPassedText(text.slice(0, changeIndex));
        setActiveText(text.slice(changeIndex, changeIndex + 1));
        setDefaultText(text.slice(changeIndex + 1));
    }, [text, changeIndex]);
    useEffect(() => {
        const useKeyPress = async (e) => {
            inputRef.current.focus();

            if (e.key === 'Tab') {
                e.preventDefault();
                inputRef.current.focus();
            }
            if (e.key === activeText[0]) {
                setStatus('active');
                setCorrectCount((count) => count + 1);
                setChangeIndex((changeIndex) => changeIndex + 1);
            }
            if (e.key !== activeText[0] && text.length !== 0 && status === 'active') {
                setMistakeCount((count) => count + 1);
                setStatus('mistake');
            }
        };
        document.addEventListener('keypress', useKeyPress);

        return () => {
            document.removeEventListener('keypress', useKeyPress);
        };
    }, [activeText, status, speed, time]);
    useEffect(() => {
        if (text.length !== 0) {
            const interval = setInterval(() => {
                setTime((time) => time + 1);
                setSpeed(Math.round(correctCount / (time / 60)));
                setAccuracy(((text.length - mistakeCount) / (text.length / 100)));
            }, 1000);
            return () => {
                clearInterval(interval);
            };
        }
    }, [text, time, speed]);
    return (
        <div>
            <button onClick={getText}>Get text</button>
            <input type="text" ref={inputRef} className={styles.input} />
            <span>
                {isNaN(speed) === true ? (0).toFixed(2) : speed.toFixed(2)} {accuracy. toFixed(2)}
            </span>
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
