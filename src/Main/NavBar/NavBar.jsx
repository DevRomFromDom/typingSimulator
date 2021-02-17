import React from 'react';
import DropDown from '../DropDown/DropDown';
import { Navbar, Nav, Button } from 'react-bootstrap';

const NavBar = ({ startTest, language, setLanguage, restart }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="p-2 pt-1 pb-1 b2 rounded">
            <Navbar.Brand> Тренажер слепой печати</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-md-between">
                <Nav className="mr-auto">
                    <Button
                        variant="success"
                        onClick={() => {
                            restart();
                        }}
                    >
                        Тестирование
                    </Button>
                </Nav>
                <DropDown language={language} setLanguage={setLanguage} />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
