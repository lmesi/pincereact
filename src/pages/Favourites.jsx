// React imports
import React from 'react';

//Import images
import cover1 from '../images/card_cover_placholder1.jpg';
import cover2 from '../images/card_cover_placholder2.jpg';

// Import layouts
import MainLayout from '../layouts/MainLayout';

// Import components
import FoodCard from '../components/FoodCard';

// Import styles
import './Favourites.css';

const Favourites = (props) => {

    return (
        <MainLayout
            {...props}
            backButtonEnabled={true}
            pageTitle='Kedvencek'
            pageId={2}>

            <FoodCard
                fullwidth
                gradient
                cover={cover1}
                title="Teszt címsor ami nagyon hosszú és nem fér ki"
                text="A Lorem Ipsum egy egyszerû szövegrészlete, szövegutánzata a betûszedõ és nyomdaiparnak. A Lorem Ipsum az 1500-as évek óta standard szövegrészletként szolgált az iparban; mikor egy ismeretlen nyomdász összeállította a betûkészletét és egy példa-könyvet vagy szöveget nyomott papírra, ezt használta." />

            <FoodCard
                fullwidth
                gradient
                cover={cover2}
                title="Teszt címsor ami nagyon hosszú és nem fér ki"
                text="A Lorem Ipsum egy egyszerû szövegrészlete, szövegutánzata a betûszedõ és nyomdaiparnak. A Lorem Ipsum az 1500-as évek óta standard szövegrészletként szolgált az iparban; mikor egy ismeretlen nyomdász összeállította a betûkészletét és egy példa-könyvet vagy szöveget nyomott papírra, ezt használta." />
        </MainLayout>
    );
}

export default Favourites;
