import React from 'react';
import NavLi from '../Navigation/NavigationElement/NavigationElement';
import styles from './Navigation.module.scss';

const Navigation = () => {

    return (
        <ul className={styles.Nav}>
            <NavLi
            content="oMnie"/>
            <NavLi
            content="filmy"/>
            <NavLi
            content="gitary"/>
            <NavLi
            content="kontakt"/>
        </ul>
    );
}

export default Navigation;