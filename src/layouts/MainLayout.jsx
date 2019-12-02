import React from 'react';
import { Page, Toolbar, ToolbarButton, Icon } from 'react-onsenui';

import PincerHeader from '../components/PincerHeader';
import PincerContent from '../components/PincerContent';


const renderToolbar = () => {
    return (
        <Toolbar>
            <div className="right">
                <ToolbarButton>
                    <Icon icon={{ default: 'ion-ios-qr-scanner', material: 'ion-md-qr-scanner' }} style={{color: 'white'}} />
                </ToolbarButton>
                <ToolbarButton>
                    <Icon icon={{ default: 'ion-ios-heart', material: 'ion-md-heart' }} style={{color: 'white'}} />
                </ToolbarButton>
            </div>
        </Toolbar>
    );
}

const MainLayout = (props) => {
    return (
        <Page renderToolbar={renderToolbar}>
            <PincerHeader />
            <PincerContent>
                {props.children}
            </PincerContent>
        </Page>
    )
}

export default MainLayout;