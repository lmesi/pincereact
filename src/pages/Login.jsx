import React from 'react';
import { Page, Toolbar, ToolbarButton, Icon, Button } from 'react-onsenui';

import Home from './Home';
  
const pushPage = (props, page) => {
    props.navigator.pushPage({ component: page });
}

const renderToolbar = () => {
    return (
        <Toolbar>
            <div className="right">
                <ToolbarButton>
                    <Icon icon={{default: 'ion-ios-qr-scanner', material: 'ion-md-qr-scanner'}} />
                </ToolbarButton>
                <ToolbarButton>
                    <Icon icon={{default: 'ion-ios-heart', material: 'ion-md-heart'}} />
                </ToolbarButton>
            </div>
        </Toolbar>
    );
}

const Login = (props) => {
    return (
        <Page renderToolbar={renderToolbar}>
            <p style={{ textAlign: 'center' }}>
                <Button onClick={() => { pushPage(props, Home) }}>Push to Home</Button>
            </p>
        </Page>
    );
}

export default Login;
