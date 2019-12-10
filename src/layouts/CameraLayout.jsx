//React imports
import React from 'react';

//Onsen imports
import { Page } from 'react-onsenui';

/**
 * CameraLayout
 * 
 * Az applikáció a telefon kamerájának igénybevételekor használatos elrendezése.
 */
const CameraLayout = (props) => {

    /**
     * toggleQRScanner()
     * 
     * QR kód beolvasó kamera mód megjelenítéséért és eltüntetéséért felel.
     * ( cordova-plugin-qrscanner )
     */
    const toggleQRScanner = () => {
        window.QRScanner.scan(displayContents);
        window.QRScanner.show(function (status) {
            console.log(status);
        });
    }

    /**
     * displayContents() 
     *
     * A beolvasott kĂłd tartalmát jelení­ti meg
     * ( cordova-plugin-qrscanner )
     */
    const displayContents = (err, text) => {
        alert(text);
    }


    return (
        <Page {...props} onInit={toggleQRScanner} style={{ display: 'none' }} />
    );
}

export default CameraLayout;