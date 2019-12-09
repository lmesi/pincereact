// React imports
import React, { useState, useEffect } from 'react';

//Onsen imports
import { Input, Button, AlertDialog, AlertDialogButton } from 'react-onsenui';

// Import layouts
import MainLayout from '../layouts/MainLayout';

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

        setAlertDialogStatus(true);
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
                    onClick={() => { formValidation() }}>
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