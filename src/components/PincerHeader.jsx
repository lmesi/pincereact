//React imports
import React from 'react';

//Import pages
import Login from '../pages/Login';

//Import images
import profileButtonImage from '../images/user.png';

//Import styles
import './PincerHeader.css';

const PincerHeader = (props) => {

    /**
     * pushPage()
     * 
     * Navigál egy adott oldalra.
     */
    const pushPage = (props, page) => {
        props.navigator.pushPage({ component: page });
    }

    return (
        <div className="pincerHeader" onClick={props.onClick} >
            <div>
                <h1 className="appTitle">PincérApp</h1>
                <h2 className="pageTitle">{`Üdv ${global.USER?global.USER.user.displayName:''}!`}</h2>
            </div>

            <div>
                <img src={profileButtonImage} alt="Profile Button"  onClick={() => props.pageId !== 4 ? pushPage(props, Login) : false}/>
            </div>
        </div>
    )
}

export default PincerHeader;