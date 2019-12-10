// React imports
import React, { useState } from 'react';
import firebase from '../firebase'

//Onsen imports
import { Toast, Button, Input } from 'react-onsenui';

//Import pages
import Register from '../pages/Register';

// Import layouts
import MainLayout from '../layouts/MainLayout';
import Home from './Home'

// Import styles
import './Login.css';

const Login = (props) => {

    const [emailText, setEmailText] = useState('');
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

    const handleLogInForm = ev => {
        firebase
            .auth()
            .signInWithEmailAndPassword(emailText, passwordText)
            .then(user => {
                global.USER = user
                console.log(user)
                props.navigator.pushPage({ component: Home });})
            .catch(function(error) {
                console.log(error.message)
            });
    }


    /**
     * hideToast()
     * 
     * Toast üzenet automatikus elrejtése
     */
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
                    value={emailText} float
                    onChange={(event) => { setEmailText(event.target.value) }}
                    type="string"
                    placeholder='Felhasználónév' />

                <Input
                    value={passwordText} float
                    onChange={(event) => { setPasswordText(event.target.value) }}
                    type="password"
                    placeholder='Jelszó' />

                <Button
                     onClick={() => { 
                        handleLogInForm()
                    }}>
                    Bejelentkezés
                </Button>
            </div>

            <Toast
                isOpen={toastStatus}
                onPostShow={() => { hideToast() }}>
                Ha még nem rendelkezel felhasználói fiókkal,
                <span
                    className="color-accent"
                    onClick={() => { pushPage(props, Register) }}> itt regisztrálhatsz</span> egyet.<button onClick={() => { setToastStatus(false) }}>OK</button>
            </Toast>

        </MainLayout>
    )
}

export default Login;
