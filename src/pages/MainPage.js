import React from 'react'
import DrawerTwo from '../components/DrawerTwo'
import TabOne from '../components/TabOne'
import TabTwo from '../components/TabTwo'
import SideMenu from '../components/SideMenu'
import SideMenuTab from '../components/SideMenuTab'
// import DrawerOne from '../components/DrawerOne'


function MainPage() {
    return (
        <div>
            {/* <DrawerOne /> */}
            <DrawerTwo />
            <TabOne />
            <TabTwo />
            <SideMenu />
            <SideMenuTab />
            <h1>Mainpage</h1>
        </div>
    )
}

export default MainPage