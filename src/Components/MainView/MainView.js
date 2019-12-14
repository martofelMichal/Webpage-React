import React from 'react';
import styles from './MainView.module.scss';
import GuitarMan from '../../assets/images/ManWithGuitar.png';
import Navigation from './../Navigation/Navigation'; 
import Header from './../Header/Header';

const MainView = ({content}) => {

    return(
        <div className={styles.FlexBackground}>
            <div className={styles.Info}>
                <Navigation>

                </Navigation>
                <div className={styles.MarginTop}>
                <Header
                    content="michałMartofel"
                />
                <Header
                    content="guitarHero"
                />
                <Header
                    content="lorem ipsum"
                    size="h3"
                    tag="cytat"
                />
                </div>
            </div>
            <div className={styles.IntroImg}>
                <img className={styles.GuitarMan} src={GuitarMan} alt="logo"></img>
            </div>
        </div>
    );

};

export default MainView;