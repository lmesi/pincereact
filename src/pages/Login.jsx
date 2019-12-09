// React imports
import React from 'react';

// Import layouts
import MainLayout from '../layouts/MainLayout';

// Import styles
import './Login.css';

const Login = (props) => {
    return (
        <MainLayout
            {...props}
            backButtonEnabled={true}
            pageTitle='Bejelentkezés'
            pageId={4}>
            <p>ez a login page</p>
        </MainLayout>
    )
}

export default Login;
