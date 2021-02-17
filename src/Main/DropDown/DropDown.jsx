import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const DropDown = ({ language, textLanguage }) => {
    return (
        <DropdownButton id="dropdown-basic-button" variant="secondary" title={language}>
            <Dropdown.Item
                value={'Russian'}
                onClick={(e) => {
                    textLanguage(e);
                }}
            >
                Russian layout
            </Dropdown.Item>
            <Dropdown.Item
                value={'English'}
                onClick={(e) => {
                    textLanguage(e);
                }}
            >
                English layout
            </Dropdown.Item>
        </DropdownButton>
    );
};

export default DropDown;
