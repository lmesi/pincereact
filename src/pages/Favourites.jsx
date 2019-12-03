// React imports
import React from 'react';

// Onsen imports
import { Card } from 'react-onsenui';

// Import layouts
import MainLayout from '../layouts/MainLayout';

// Import styles
import './Favourites.css';

const Favourites = (props) => {

    return (
        <MainLayout {...props} backButtonEnabled={true} pageTitle='Kedvencek'>
            <Card>
                asd
            </Card>
        </MainLayout>
    );
}

export default Favourites;
