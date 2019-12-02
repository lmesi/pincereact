import React from 'react';
import { Toolbar, Page, Button } from 'react-onsenui';

import Home from './Home';
  
const pushPage = (props) => {
    props.navigator.pushPage({ component: Home });
}

const renderToolbar = () => {
    return (
        <Toolbar>
            <div className="center">Login page</div>
        </Toolbar>
    );
}

const Login = (props) => {
    return (
        <Page renderToolbar={renderToolbar}>
            <p style={{ textAlign: 'center' }}>
                <Button onClick={() => { pushPage(props) }}>Push to Home</Button>
            </p>
        </Page>
    );
}

export default Login;
