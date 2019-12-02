import React from 'react';
import { Button, Card, Icon } from 'react-onsenui';

import iconFavourites from '../images/iconFavourites.png';
import iconTutorial from '../images/iconTutorial.png';
import iconWaiter from '../images/iconWaiter.png';

import MainLayout from '../layouts/MainLayout';

import './Home.css';

//import Login from './Login';

/*const pushPage = (props, page) => {
    props.navigator.pushPage({ component: page });
}*/

const Home = (props) => {
    return (
        <MainLayout>
            <Card className="iconCard">
                <div className="iconContainer">
                    <img src={iconTutorial} alt="Icon card"/>
                </div>
                <div className="textContainer">
                    <h4><strong>Ez egy címsor</strong></h4>
                    <p>Lorem Ipsum egy egyszerû szövegrészlete, szövegutánzata a betûszedõ és nyomdaiparnak. A Lorem Ipsum az 1500-as évek óta standard szövegrészletként szolgált az iparban;</p>
                </div>
            </Card>

            <Card className="iconCard">
                <div className="iconContainer">
                    <img src={iconWaiter} alt="Icon card"/>
                </div>
                <div className="textContainer">
                    <h4><strong>Ez egy címsor</strong></h4>
                    <p>Lorem Ipsum egy egyszerû szövegrészlete, szövegutánzata a betûszedõ és nyomdaiparnak. A Lorem Ipsum az 1500-as évek óta standard szövegrészletként szolgált az iparban;</p>
                </div>
            </Card>
            
            <Card className="iconCard">
                <div className="iconContainer">
                    <img src={iconFavourites} alt="Icon card"/>
                </div>
                <div className="textContainer">
                    <h4><strong>Ez egy címsor</strong></h4>
                    <p>Lorem Ipsum egy egyszerû szövegrészlete, szövegutánzata a betûszedõ és nyomdaiparnak. A Lorem Ipsum az 1500-as évek óta standard szövegrészletként szolgált az iparban;</p>
                </div>
            </Card>
        </MainLayout>
    );
}

export default Home;
