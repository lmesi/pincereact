//React imports
import React from 'react';

//Onsen imports
import { Page, Toolbar, ToolbarButton, Icon } from 'react-onsenui';

//Import pages
//import Home from '../pages/Home';
import Favourites from '../pages/Favourites';

//Import components
import PincerHeader from '../components/PincerHeader';
import PincerContent from '../components/PincerContent';

const pushPage = (props, page) => {
    props.navigator.pushPage({ component: page });
}
/*
const renderToolbar = (props) => {
    return (
        
    );
}*/

const MainLayout = (props) => {
    return (
        <Page renderToolbar={() =>
            <Toolbar>
                <div className="right">
                    <ToolbarButton>
                        <Icon icon={{ default: 'ion-ios-qr-scanner', material: 'ion-md-qr-scanner' }} style={{ color: 'white' }} />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => { pushPage(props, Favourites) }}>
                        <Icon icon={{ default: 'ion-ios-heart', material: 'ion-md-heart' }} style={{ color: 'white' }} />
                    </ToolbarButton>
                </div>
            </Toolbar>} contentStyle={{ padding: 0 }}>
            <PincerHeader />
            <PincerContent>
                {props.children}
            </PincerContent>
        </Page>
    )
}

export default MainLayout;