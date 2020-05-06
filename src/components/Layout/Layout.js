import React from 'react';
import Wrapper from '../../hoc/Wrapper';

import classes from './Layout.module.css';

const layout = ( props ) => {
    console.log(classes)
    return(
        <Wrapper>
            <div>Toolbar, SideDrawer, BackDrop</div>
            <main className={classes.Content} >
                {props.children}
            </main>
        </Wrapper>
    );
};

export default layout;