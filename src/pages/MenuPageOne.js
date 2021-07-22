import React from 'react'
import DrawerTwo from '../components/DrawerTwo'
import TabOne from '../components/TabOne'
import TabTwo from '../components/TabTwo'
import SideMenu from '../components/SideMenu'
import SideMenuTab from '../components/SideMenuTab'
import Body from '../components/Body'
import { useContext } from 'react'
import {  ShowContext } from '../App'
// import DrawerOne from '../components/DrawerOne'


function MenuPageOne() {

    const showHeader = useContext(ShowContext)

    console.log(showHeader)

    return (
        <div>
            {/* <DrawerOne /> */}
            {/* <DrawerTwo /> */}
            <TabOne />
            {/* <TabTwo /> */}
            {/* <SideMenu /> */}
            {/* <SideMenuTab /> */}
            {/* <h1>Mainpage</h1> */}
            <Body />
        </div>
    )
}

export default MenuPageOne