/* eslint-disable react-native/sort-styles */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { enableScreens } from "react-native-screens";
// import { createNativeStackNavigator } from "react-native-screens/native-stack";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";

const Stack = createStackNavigator();
// enableScreens();
// const Stack = createNativeStackNavigator();

export default function StackA() {
    return (
        <Stack.Navigator
            // screenOptions={{ headerShown: false }}
            // initialRouteName="Tab"
            // mode="modal"
            headerMode="none"
        >
            <Stack.Screen
                name="FirstComponent"
                component={FirstComponent}
                title={"First Component"}
            />
            <Stack.Screen
                name="SecondComponent"
                component={SecondComponent}
                title={"Second Component"}
            />
            {/* <Stack.Screen
                name="ThirdComponent"
                component={ThirdComponent}
                title={"Third Component"}
            /> */}
        </Stack.Navigator>
    );
}
