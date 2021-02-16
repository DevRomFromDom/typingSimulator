import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import DropDown from '../DropDown/DropDown';
import { Navbar, Nav, Button } from 'react-bootstrap';

const NavBar = ({ language, textLanguage }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="p-2 pt-1 pb-1 b2 rounded">
            <Navbar.Brand href="#home"> Тренажер слепой печати</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-md-between">
                <Nav className="mr-auto">
                    <Button variant="secondary">Начать тест</Button>
                </Nav>
                <DropDown language={language} textLenguage={textLanguage} />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
