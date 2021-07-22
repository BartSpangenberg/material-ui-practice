import React from 'react';
import { Drawer, Button } from '@material-ui/core'

function DrawerOne() {

    const menuItems = ['left', 'right', 'top', 'bottom'];

    return (
        <>
        {
            menuItems.map((anchor) => (
            <React.Fragment key={anchor}>
                <Button>{anchor}</Button>
                <Drawer>
                    {(anchor)}
                </Drawer>
            </React.Fragment>
          ))}
    </>
    )
}

export default DrawerOne
