//React imports
import React from 'react';

//Import images
import iconFavourites from '../images/iconFavourites.png';
import iconTutorial from '../images/iconTutorial.png';
import iconWaiter from '../images/iconWaiter.png';

//Import components
import IconCard from '../components/IconCard';

//Import layouts
import MainLayout from '../layouts/MainLayout';

//Import styles
import './Home.css';

const Home = (props) => {
    const username = "Attila";
    const pageTitle = "Üdv, " + username + "!";

    return (
        <MainLayout
            {...props}
            backButtonEnabled={false}
            pageTitle={pageTitle}>

            <IconCard
                cardIcon={iconTutorial}
                cardTitle="Alkalmazás használata"
                cardText="Használd a felső navgiációs sávot a funkciók és oldalak közötti váltáshoz. Felhasználói fiókodba érintsd meg a profilkép helyén lévő gombot."
            />

            <IconCard
                cardIcon={iconFavourites}
                cardTitle="Mentsd el kedvenceidet"
                cardText="Regisztrálj, és mentsd el kedvenc ételeid az alkalmazásba, hogy később gyorsabban és egyszerűbben rendelj."
            />

            <IconCard
                cardIcon={iconWaiter}
                cardTitle="Hívd a pincért!"
                cardText="A QR kód olvasó funkcióval másodpercek alatt hívhatod a pincért a választott ételeid megrendeléséhez"
            />
        </MainLayout>
    );
}

export default Home;
