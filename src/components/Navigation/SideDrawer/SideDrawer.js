/** @format */

import React from 'react';

import classes from 'components/Navigation/SideDrawer/SideDrawer.css';
import { Logo } from 'components/Logo';
import { NavigationItems } from 'components/Navigation';
import { Backdrop } from 'components/UI';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <Logo height="11%" />
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;
