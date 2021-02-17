import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './SuccsessModal.module.scss';
import Target from '../../icons/target.svg';
import Speed from '../../icons/speed.svg';

const SuccessModal = ({ passedText, text, speed, accuracy, restart }) => {
    useEffect(() => {
        if (text.length === passedText.length && text.length !== 0) {
            setShow(true);
        }
    }, [text, passedText]);
    const [show, setShow] = useState(false);
    const close = () => {
        setShow(false);
    };
    return (
        <div className="modal">
            <Modal show={show} centered={true} onHide={() => {}}>
                <Modal.Header>
                    <Modal.Title>
                        <h4>Поздравляем с завершением теста!</h4>
                    </Modal.Title>
                    <Button variant="secondary" onClick={close}>
                        X
                    </Button>
                </Modal.Header>

                <Modal.Body>
                    <div className={styles.indicators}>
                        <h4>Ваш результат:</h4>
                        <div className={styles.speed}>
                            <span className={styles.indicators_span}>
                                <img src={Speed} alt="" className={styles.icon} />
                                Скорость
                            </span>
                            <span className={styles.indicators_numbers}>
                                {isNaN(speed) ? (0).toFixed(2) : speed.toFixed(2)}
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
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="success"
                        onClick={() => {
                            restart();
                            close()
                        }}
                    >
                        Попробовать еще раз
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SuccessModal;
