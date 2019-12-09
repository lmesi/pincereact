// React imports
import React from 'react';

//Onsen imports
import { Toast } from 'react-onsenui';

// Import layouts
import MainLayout from '../layouts/MainLayout';

// Import styles
import './Register.css';

const Register = (props) => {

    /**
     * pushPage()
     * 
     * Navigál egy adott oldalra.
     */
    const pushPage = (props, page) => {
        props.navigator.pushPage({ component: page });
    }

    return (
        <MainLayout
            {...props}
            backButtonEnabled={true}
            pageTitle='Regisztráció'
            pageId={5}>
            
            <Toast isOpen={true}>Ha már rendelkezel felhasználói fiókkal, <span className="color-accent" onClick={() => { pushPage(props, Register); }}>itt visszaléphetsz</span> a bejelentkezéshez. <button>OK</button></Toast>

        </MainLayout>
    )
}

export default Register;
