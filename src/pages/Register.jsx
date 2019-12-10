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
    const [responseMessage, setResponseMessage] = useState('');
    const [userData, setUserData] = useState();
    const [errorStatus, setErrorStatus] = useState(true);

    useEffect(() => {
        if ((usernameText.length !== 0) && (passwordText.length !== 0) && (repeatPasswordText.length !== 0) && (emailText.length !== 0)) {
            setDisabledButtonStatus(false);
        }
    }, [setDisabledButtonStatus, usernameText, passwordText, repeatPasswordText, emailText]);

    const handleRegisterForm = ev => {

        /// Validate States...
        if (formValidation()) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(emailText, passwordText)
                .then(user => {
                    user.user.updateProfile({ displayName: usernameText })
                        .then(() => {
                            setErrorStatus(false)
                            setAlertDialogStatus(true)
                            setResponseMessage("Sikeres regisztráció.")
                            setUserData(user.user)
                        })
                })
                .catch(function (error) {
                    setErrorStatus(true)
                    console.log(error)
                    setResponseMessage(error.message)
                    setAlertDialogStatus(true)
                });
        }
    }

    const formValidation = () => {
        if (usernameText.length < 4 || usernameText.length > 12) {
            setResponseMessage("A felhasználónév minimum 4, maximum 12 karakterből állhat.");
        }
        else if (passwordText.length < 6) {
            setResponseMessage("A jelszavadnak minimum 6 karakterből kell állnia.");
        }
        else if ((passwordText.length > 6) && (passwordText !== repeatPasswordText)) {
            setResponseMessage("A megadott jelszavak nem egyeznek.");
        }
        else {
            setErrorStatus(false);
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
                <div className="alert-dialog-title">Regisztráció</div>
                <div className="alert-dialog-content">
                    {responseMessage}
                </div>
                <div className="alert-dialog-footer">
                    <AlertDialogButton
                        onClick={() => {
                            setAlertDialogStatus(false)

                            {
                                if(!errorStatus)  
                                props.navigator.pushPage({ component: Home, props: { username: userData } });
                            }
                        }}
                        className="alert-dialog-button">
                        OK
                    </AlertDialogButton>
                </div>
            </AlertDialog>
        </MainLayout>
    )
}


export default Register;
