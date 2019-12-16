//React imports
import React from 'react';

//Onsen imports
import { Page, Toolbar, ToolbarButton, Icon, BackButton, Fab } from 'react-onsenui';

//Import pages
//import Home from '../pages/Home';
import Favourites from '../pages/Favourites';
import Scanner from '../pages/Scanner';

//Import components
import PincerHeader from '../components/PincerHeader';
import PincerContent from '../components/PincerContent';

/**
 * OrderLayout
 * 
 * Az applikáció elsődleges elrendezési formája.
 */
const OrderLayout = (props) => {
    const renderBackButton = props.backButtonEnabled ? <BackButton modifier={props.modifier}>Back</BackButton> : '';

    /**
     * pushPage()
     * 
     * Navigál egy adott oldalra.
     */
    const pushPage = (props, page) => {
        props.navigator.pushPage({ component: page });
    }

    return (
        <Page
            renderToolbar={
                () =>
                    <Toolbar modifier={props.modifier}>

                        <div className="left">
                            {renderBackButton}
                        </div>

                        <div className="right">
                            <ToolbarButton onClick={() => { pushPage(props, Scanner) }}>
                                <Icon
                                    icon={{
                                        default: 'ion-ios-qr-scanner',
                                        material: 'ion-md-qr-scanner'
                                    }}

                                    style={{
                                        color: 'white'
                                    }}
                                />
                            </ToolbarButton>

                            <ToolbarButton onClick={() => props.pageId !== 2 ? pushPage(props, Favourites) : false}>
                                <Icon
                                    icon={{
                                        default: 'ion-ios-heart',
                                        material: 'ion-md-heart'
                                    }}

                                    style={{
                                        color: 'white'
                                    }} />
                            </ToolbarButton>

                        </div>
                    </Toolbar>
            }
            contentStyle={{ padding: 0 }}>

            <PincerHeader
                {...props}
                pageTitle={props.pageTitle}
                displayName={props.displayName}
            />

            <PincerContent>
                {props.children}
            </PincerContent>

            <Fab
                ripple={true}
                position={"bottom right"}
                style={{ backgroundColor: '#2979ff' }}
                onClick={props.orderFunction}>

                <Icon
                    icon={{
                        default: 'ion-ios-restaurant',
                        material: 'ion-md-restaurant'
                    }}
                    size={26}
                    fixedWidth={false}
                    style={{ lineHeight: 0, verticalAlign: 'middle', color: '#fff' }}
                />

            </Fab>
        </Page>
    )
}

export default OrderLayout;
