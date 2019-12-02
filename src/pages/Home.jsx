//React imports
import React from 'react';

//Onsen imports
import { Card } from 'react-onsenui';

//Import images
import iconFavourites from '../images/iconFavourites.png';
import iconTutorial from '../images/iconTutorial.png';
import iconWaiter from '../images/iconWaiter.png';

//Import pages

//Import layouts
import MainLayout from '../layouts/MainLayout';

//Import styles
import './Home.css';

const Home = (props) => {
    return (
        <MainLayout {...props}>
            <Card className="iconCard">
                <div className="iconContainer">
                    <img src={iconTutorial} alt="Icon card"/>
                </div>
                <div className="textContainer">
                    <h4><strong>Alkalmazás használata</strong></h4>
                    <p>Használd a felső navgiációs sávot a funkciók és oldalak közötti váltáshoz. Felhasználói fiókodba érintsd meg a profilkép helyén lévő gombot.</p>
                </div>
            </Card>

            <Card className="iconCard">
                <div className="iconContainer">
                    <img src={iconFavourites} alt="Icon card"/>
                </div>
                <div className="textContainer">
                    <h4><strong>Mentsd el kedvenceid</strong></h4>
                    <p>Regisztrálj, és mentsd el kedvenc ételeid az alkalmazásba, hogy később gyorsabban és egyszerűbben rendelj.</p>
                </div>
            </Card>
            
            <Card className="iconCard">
                <div className="iconContainer">
                    <img src={iconWaiter} alt="Icon card" style={{transform: 'scale(1.2)'}}/>
                </div>
                <div className="textContainer">
                    <h4><strong>Hívd a pincért!</strong></h4>
                    <p>A QR kód olvasó funkcióval másodpercek alatt hívhatod a pincért a választott ételeid megrendeléséhez.</p>
                </div>
            </Card>
        </MainLayout>
    );
}

export default Home;
