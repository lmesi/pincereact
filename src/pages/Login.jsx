// React imports
import React, { useState } from 'react';

//Onsen imports
import { Toast, Button, Input, Icon } from 'react-onsenui';

//Import pages
import Register from '../pages/Register';

// Import layouts
import MainLayout from '../layouts/MainLayout';

// Import styles
import './Login.css';

const Login = (props) => {

    const [usernameText, setUsernameText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [toastStatus, setToastStatus] = useState(true);

    /**
     * pushPage()
     * 
     * Navigál egy adott oldalra.
     */
    const pushPage = (props, page) => {
        setToastStatus(false);
        props.navigator.pushPage({ component: page });
    }

    const hideToast = () => {
        setTimeout(() => {
            setToastStatus(false);
        }, 6000);
    }

    return (
        <MainLayout
            {...props}
            backButtonEnabled={true}
            pageTitle='Bejelentkezés'
            pageId={4}>

            <div className="container">
                <Input
                    value={usernameText} float
                    onChange={(event) => { setUsernameText(event.target.value) }}
                    type="string"
                    placeholder='Felhasználónév' />

                <Input
                    value={passwordText} float
                    onChange={(event) => { setPasswordText(event.target.value) }}
                    type="password"
                    placeholder='Jelszó' />

                <Button>
                    <Icon
                        icon={{ default: 'ion-ios-log-in', material: 'ion-md-log-in' }}
                        size={{ default: 20, material: 20 }}
                        style={{ color: 'white', marginRight: '1vw' }}
                    />
                    Bejelentkezés
                </Button>
            </div>

            <Toast
                isOpen={toastStatus}
                onPostShow={() => { hideToast() }}>
                Ha még nem rendelkezel felhasználói fiókkal,
                <span
                    className="color-accent"
                    onClick={() => { pushPage(props, Register) }}>itt regisztrálhatsz</span> egyet.<button onClick={() => { setToastStatus(false) }}>OK</button>
            </Toast>

        </MainLayout>
    )
}

export default Login;
