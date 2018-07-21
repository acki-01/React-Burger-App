/** @format */

import React from 'react';

import classes from 'components/Navigation/Toolbar/Toolbar.css';
import { Logo } from 'components/Logo';
import { NavigationItems } from 'components/Navigation';
import DrawerToggle from 'components/Navigation/SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.sideDrawerToggleClicked} />
        <Logo height="80%" />
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default toolbar;
