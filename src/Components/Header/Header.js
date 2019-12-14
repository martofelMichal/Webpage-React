import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = ({content, size, tag}) => {

    const HeaderSize = size ? 'h3' : 'h1';

    return(
        <>
        {
            tag ? (
                <HeaderSize className={styles.Cytat}>
                    {content}
                </HeaderSize>
            ) : (
                <HeaderSize className={styles.Font}>
                    {content}
                </HeaderSize>
                )
        }
        </>
    );

};

Header.propTypes = {
    content: PropTypes.string.isRequired,
    size: PropTypes.string
};



export default Header;