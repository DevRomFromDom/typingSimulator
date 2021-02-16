import React, { useEffect, useRef, useState } from 'react';
import styles from './Text.module.scss';
import Letter from './Letter/Letter';
import NavBar from '../NavBar/NavBar';
import Target from '../icons/target.svg';
import Speed from '../icons/speed.svg';

const Text = ({ start, language, textLenguage }) => {
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

    useEffect(() => {
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
        getText();
    }, []);

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
                console.log('miss');
                setMistakeCount((mistakeCount) => mistakeCount + 1);
                setStatus('mistake');
            }
        };
        document.addEventListener('keypress', useKeyPress);

        return () => {
            document.removeEventListener('keypress', useKeyPress);
        };
    }, [activeText, status, time, mistakeCount]);
    useEffect(() => {
        if (start !== false) {
            const interval = setInterval(() => {
                setTime((time) => time + 1);
                setSpeed(Math.round(correctCount / (time / 60)));
                setAccuracy((text.length - mistakeCount) / (text.length / 100));
            }, 1000);
            return () => {
                clearInterval(interval);
            };
        }
    }, [start, time]);

    return (
        <div className={styles.view}>
            <NavBar language={language} textLenguage={textLenguage} />
            <div className={styles.typing_block}>
                <div className={styles.text_body}>
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
                <div className={styles.indicators}>
                    <div className={styles.speed}>
                        <span className={styles.indicators_span}>
                            <img src={Speed} alt="" className={styles.icon} />
                            Скорость
                        </span>
                        <span className={styles.indicators_numbers}>
                            {isNaN(speed) === true ? (0).toFixed(2) : speed.toFixed(2)}
                            <span className={styles.small_text}>зн/мин.</span>
                        </span>
                    </div>
                    <div className={styles.accuracy}>
                        <span className={styles.indicators_span}>
                            <img src={Target} alt="" className={styles.icon} />
                            Точность
                        </span>
                        <span className={styles.indicators_numbers}>
                            {accuracy.toFixed(2)} <span className={styles.small_text}>%</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Text;
