import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import DropDown from '../DropDown/DropDown'
import { Modal, Button } from 'react-bootstrap';

const ModalComponent = ({ startTest, start, language, textLanguage }) => {
    return (
        <div className="modal">
            <Modal show={!start} centered={true}>
                <Modal.Header>
                    <Modal.Title>
                        <h4>Тренажер слепой печати</h4>
                    </Modal.Title>
                    <DropDown language={language} textLanguage={textLanguage} />
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

export default ModalComponent;
