import React, { useEffect, useState } from 'react';
import DropDown from '../DropDown/DropDown';
import { Modal, Button } from 'react-bootstrap';

const StartModal = ({ startTest, start, language, setLanguage, time }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(time === 0 && !start);
    }, [time, start]);
    return (
        <div className="modal">
            <Modal show={show} centered={true} onHide={() => {}}>
                <Modal.Header>
                    <Modal.Title>
                        <h4>Тренажер слепой печати</h4>
                    </Modal.Title>
                    <DropDown language={language} setLanguage={setLanguage} />
                </Modal.Header>

                <Modal.Body>
                    <h5 fontSize="lg">Нажми, Начать тест, когда будешь готов!</h5>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" onClick={startTest}>
                        Начать тест
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default StartModal;
