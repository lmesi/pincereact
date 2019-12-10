// React imports
import React, { useState, useEffect } from 'react';
import firebase from '../firebase'

//Onsen imports
import { Input, Button, AlertDialog, AlertDialogButton } from 'react-onsenui';

// Import layouts
import MainLayout from '../layouts/MainLayout';
import Home from './Home'

// Import styles
import './Register.css';

const Register = (props) => {

    const [usernameText, setUsernameText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [repeatPasswordText, setRepeatPasswordText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [disabledButton, setDisabledButtonStatus] = useState(true);
    const [alertDialogStatus, setAlertDialogStatus] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if ((usernameText.length !== 0) && (passwordText.length !== 0) && (repeatPasswordText.length !== 0) && (emailText.length !== 0)) {
            setDisabledButtonStatus(false);
        }
    });

    const handleRegisterForm = ev => {
        console.log('LogIn withc Credential..')
        console.log(usernameText)
        console.log(passwordText)
        /// Validate States...
        if( formValidation() ) {
            firebase
            .auth()
            .createUserWithEmailAndPassword(emailText, passwordText)
            .then(user => {
                user.user.updateProfile({displayName: usernameText})
                global.USER = user
                console.log(user)
                setAlertDialogStatus(true)
                props.navigator.pushPage({ component: Home });})
            .catch(function(error) {
                // Handle Errors here.
                console.log(error)
          });
        }        
    }


    const formValidation = () => {
        if (usernameText.length < 4 || usernameText.length > 12) {
            setErrorMessage("A felhasználónév minimum 4, maximum 12 karakterből állhat.");
        }
        else if(passwordText.length < 6) {
            setErrorMessage("A jelszavadnak minimum 6 karakterből kell állnia.");
        }
        else if( (passwordText.length > 6) && (passwordText !== repeatPasswordText)) {
            setErrorMessage("A megadott jelszavak nem egyeznek.");
        }
        else {
            return true;
        }
    }

    return (
        <MainLayout
            {...props}
            backButtonEnabled={true}
            pageTitle='Regisztráció'
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

                <Input
                    value={repeatPasswordText} float
                    onChange={(event) => { setRepeatPasswordText(event.target.value) }}
                    type="password"
                    placeholder='Jelszó ismét' />

                <Input
                    value={emailText} float
                    onChange={(event) => { setEmailText(event.target.value) }}
                    type="string"
                    placeholder='E-mail cím' />

                <Button
                    disabled={disabledButton}
                    onClick={() => { 
                        handleRegisterForm()
                    }}>
                    Regisztráció
                </Button>
            </div>

            <AlertDialog isOpen={alertDialogStatus} onCancel={() => { setAlertDialogStatus(false) }} cancelable>
                <div className="alert-dialog-title">Sikertelen regisztráció</div>
                <div className="alert-dialog-content">
                    {errorMessage}
                </div>
                <div className="alert-dialog-footer">
                    <AlertDialogButton onClick={() => { setAlertDialogStatus(false) }} className="alert-dialog-button">
                        OK
                    </AlertDialogButton >
                </div>
            </AlertDialog>
        </MainLayout>
    )
}


export default Register;