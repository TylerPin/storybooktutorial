/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RNBootSplash from "react-native-bootsplash";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { ContextProvider } from "./src/provider/ContextProvider";
import StackA from "./src/StackA";
import StackB from "./src/StackB";
import ThirdComponent from "./src/ThirdComponent";


import { faBars, faCoffee, faChevronRight, faDrumstickBite, faIceCream, faCar, faMoneyBill, faMoneyCheck, faMoneyCheckAlt, faHandHoldingUsd, faPlusCircle, faUserCircle, faArrowLeft, faChevronLeft, faAngleLeft, faEllipsisH, faTrashAlt, faSave, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faBars,faSyncAlt, faChevronRight, faCoffee, faDrumstickBite, faIceCream, faCar, faMoneyBill, faMoneyCheckAlt, faHandHoldingUsd, faPlusCircle, faUserCircle, faArrowLeft, faChevronLeft, faAngleLeft, faEllipsisH, faTrashAlt, faSave)


if (__DEV__) {
    import("./src/config/reactotronConfig").then(() => console.log("Reactotron Configured"));
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
    // const [isShowLoader, setIsShowLoader] = useState(false);
    useEffect(() => {
        RNBootSplash.hide({ duration: 250 });
    }, []);
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsShowLoader(true);
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // }, []);
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsShowLoader(false);
    //     }, 4000);
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <ContextProvider>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="StackA">
                    <Drawer.Screen name="StackA" component={StackA} />
                    <Drawer.Screen name="StackB" component={StackB} />
                </Drawer.Navigator>
            </NavigationContainer>
        </ContextProvider>
    );
};

export default App;
