import React from "react";
import { View, Button, SafeAreaView } from "react-native";

const FirstComponent = (props) => {
    const onPressFunc = () => {
        // props.navigation.navigate("SecondComponent");
        props.navigation.navigate("StackB", { screen: "SecondComponent" });
    };
    return (
        <SafeAreaView>
            <View>
                <Button title="Go to Second Component" onPress={onPressFunc} />
            </View>
        </SafeAreaView>
    );
};

export default FirstComponent;
