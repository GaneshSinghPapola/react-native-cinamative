import React,{ Component } from 'react';
import { Alert,BackHandler } from 'react-native';
import { Scene, Router, Actions, Modal,Reducer,Lightbox,Overlay } from 'react-native-router-flux';


// import components files here 
import {DrawerItems, Dashboard, NavBar} from './components/'
const icon = require('./assets/icons/drawerIcon.png');


const RouterComponent = () => { 
    return (
        <Router sceneStyle={{backgroundColor:"#fff"}} >
            <Overlay>
                <Modal>
                    
                    <Lightbox key="main" >
                        <Scene key="_main" >
                            <Scene drawer drawerImage={icon}  contentComponent={DrawerItems} drawerPosition="left" hideNavBar back initial key="menuBar" showLabel={false}    >
                                <Scene key="dashboard" component={Dashboard} navBar={NavBar}  title="Dashboard"/>
                            </Scene>
                            {/* <Scene key="chat" component={Chat} title="Hannah Chat" hideTabBar hideNavBar/> */}
                        </Scene>
                    </Lightbox>
                </Modal>
                {/* <Scene  key="MessageBar" component={MessageBar} /> */}
            </Overlay>
        </Router>
    )

}
export default RouterComponent;