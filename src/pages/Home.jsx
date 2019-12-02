import React from 'react';
import { Toolbar, Page, Button } from 'react-onsenui';

import Login from './Login';
  
const pushPage = (props) => {
    props.navigator.pushPage({ component: Login });
}

const renderToolbar = () => {
    return (
        <Toolbar>
            <div className="center">Home page</div>
        </Toolbar>
    );
}

const Home = (props) => {
    return (
        <Page renderToolbar={renderToolbar}>
            <p style={{ textAlign: 'center' }}>
                <Button onClick={() => { pushPage(props) }}>Push to Login</Button>
            </p>
        </Page>
    );
}

export default Home;