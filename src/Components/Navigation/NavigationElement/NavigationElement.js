import React from 'react';
import styles from './NavigationElement.module.scss';

const NavigationElement = ({content}) => {

    return (
        <li className={styles.Font}>
            {content}
        </li>
    );
}

export default NavigationElement;