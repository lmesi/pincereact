//React imports
import React from 'react';

//Onsen imports
import { Card } from 'react-onsenui';

//Import images
import iconFavourites from '../images/iconFavourites.png';
import iconTutorial from '../images/iconTutorial.png';
import iconWaiter from '../images/iconWaiter.png';

//Import pages
import Favourites from '../pages/Favourites';

//Import layouts
import MainLayout from '../layouts/MainLayout';

//Import styles
import './Home.css';

const pushPage = (props, page) => {
    props.navigator.pushPage({ component: page });
}

const Home = (props) => {
    return (
        <MainLayout>
            <Card onClick={() => { pushPage(props, Favourites) }} className="iconCard">
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
