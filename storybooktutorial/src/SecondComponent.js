import React from "react";
import { View, Button, SafeAreaView } from "react-native";

const SecondComponent = (props) => {
    return (
        <SafeAreaView>
            <View>
                <Button title="Go Back" onPress={props.navigation.goBack} />
                <Button
                    title="Go to Third Component"
                    onPress={() => props.navigation.navigate("ThirdComponent")}
                />
            </View>
        </SafeAreaView>
    );
};

export default SecondComponent;
