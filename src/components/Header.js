import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import HeaderStyle from '../styleSheets/Header.css';
import history from '../router/history';

export default class extends React.Component {
    constructor(props) {
        super(props)
    }

    handleToAbout() {
        const path = '/about';
        // history.push(path); //跳转方法一 createBrowserHistory
        this.props.history.push(path); //跳转方法二 this.props.history 
        /* 方法一盒方法二都不会导致页面刷新，但<NavItem href="/">组件跳转会导致页面刷新 */
    }

    handleToPage(path) {
        this.props.history.push(path);
    }

    // className={HeaderStyle.navbar}
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect className={HeaderStyle.navbar}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <div onClick={() => {this.handleToPage("/")}}>风信子</div>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse className={HeaderStyle.collapseStyle}>
                        <Nav>
                            <NavItem eventKey={1} onClick={() => {this.handleToPage("/about")}}>About</NavItem>
                            <NavItem eventKey={2} href="#">Link</NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Link Right</NavItem>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}