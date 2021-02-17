import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const DropDown = ({ language, setLanguage }) => {
    return (
        <DropdownButton id="dropdown-basic-button" variant="secondary" title={language}>
            <Dropdown.Item
                value={'Russian'}
                onClick={(e) => {
                    setLanguage('Russian');
                }}
            >
                Russian layout
            </Dropdown.Item>
            <Dropdown.Item
                value={'English'}
                onClick={(e) => {
                    setLanguage('English');
                }}
            >
                English layout
            </Dropdown.Item>
        </DropdownButton>
    );
};

export default DropDown;
