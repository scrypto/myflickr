import React, { Component } from 'react';
import Logo from "../../components/logo";
import Search from '../../components/search';
import style from './style.scss';

class Header extends Component {
    render() {
        return (
            <div className="headerContainer">
                <div className="header">
                    <Logo />
                    <Search />
                </div>
            </div>
        );
    }
}

export default Header;