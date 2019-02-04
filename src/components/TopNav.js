import React, { Component } from 'react';
import './TopNav.css';

const menuConfig = {
    menuItems: [
        {   menuName: 'home' },
        {   menuName: 'stuff' },
        {   menuName: 'link',
            a: (<a href='/'>{'link'}</a>),
        },
        {
            menuName: 'calc',
            dropDownItems: [
                { text: 'Link 1' },
                { text: 'Link 2' },
                { a: <a href='/'>Link 3</a> },
            ]
        }
    ]
}

class TopNavWithExternalConfig extends Component {
    state = {
        hover: false,
        display: 'none'
    }

    mouseOver = () => {
        this.setState({ hover: true, display: 'block' });
    }

    mouseOut = () => {
        this.setState({ hover: false, display: 'none' });
    }

    menuClick = () => {
        this.setState(prevState => {
            let display = 'none';
            if (prevState.display === 'none') display = 'block';
            return { hover: false, display: display }
        });
    }

    renderMenuContainer = (menuItems) => {
        let menuContainer = (
            <div
                onMouseOver={this.mouseOver}
                onMouseOut={this.mouseOut}
                onClick={this.menuClick}
                className='dropdownContent'
                style={{ display: this.state.display }} >
                {menuItems.map( (menuItem, index) => {
                    return (
                        <div
                            key={index}
                            className='menuItem'
                            onClick={this.menuClick}
                        >{menuItem.a ? menuItem.a : menuItem.text}</div>
                    )
                })}
            </div>);
        return menuContainer;
    }

    renderDropDownMenu = (menuItem, index) => {
        let dropDownMenu = (
            <li className='dropbtn'
                onMouseOver={this.mouseOver}
                onMouseOut={this.mouseOut}
                onClick={this.menuClick}
                key={index}
            >
                <span className='dropbtnLabel'>{menuItem.menuName}</span>
                {this.renderMenuContainer(menuItem.dropDownItems)}
            </li>
        );
        return dropDownMenu;
    }

    renderStaticMenuItem = (menuItem, index) => {
        let innerContent = menuItem.link ? menuItem.link : menuItem.menuName;
        let staticMenuItem = (
            <li key={index} className='menubtn'>{innerContent}</li>
        );
        return staticMenuItem;
    }

    renderTopNav = () => {
        return menuConfig.menuItems.map( (menuItem, index) => {
            if(menuItem.dropDownItems){
                return this.renderDropDownMenu(menuItem, index);
            }else{
                return this.renderStaticMenuItem(menuItem, index);
            }
        })
    }

    render() {
        return (
            <ul id='topnav'>
                {this.renderTopNav()}
            </ul>
        )
    }

}

export default TopNavWithExternalConfig;
