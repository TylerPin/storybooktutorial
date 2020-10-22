/* eslint-disable react-native/sort-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RNBootSplash from "react-native-bootsplash";

import { NavigationContainer } from "@react-navigation/native";
import { FoodProvider } from "./src/provider/FoodProvider";
import StackA from "./src/StackA";
import StackB from "./src/StackB";

const Stack = createStackNavigator();

const App = () => {
    useEffect(() => {
        RNBootSplash.hide({ duration: 250 });
    }, []);

    return (
        <FoodProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="StackA" headerMode="none">
                    <Stack.Screen name="StackA" component={StackA} />
                    <Stack.Screen name="StackB" component={StackB} />
                </Stack.Navigator>
            </NavigationContainer>
        </FoodProvider>
    );
};

export default App;
