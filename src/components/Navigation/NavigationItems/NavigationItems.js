import React from 'react'

import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'
const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem
                link="/" exact={true}>Burger Builder</NavigationItem>
            <NavigationItem
                link="/orders" exact={false}>Orders</NavigationItem>

        </ul>
    );
}

export default navigationItems;