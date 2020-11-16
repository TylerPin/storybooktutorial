/* eslint-disable react-native/sort-styles */
import React, { useContext } from "react";
import { StyleSheet, View, Text, TextInput, Button, SafeAreaView } from "react-native";

import { AppContext } from "./provider/ContextProvider";

const ThirdComponent = (props) => {
    // async componentDidMount() {
    //   console.log("componentDidMount");
    //   const result = await fetch('https://api.openbrewerydb.org/breweries/5494')
    //   const brewery = await result.json()
    //   console.log(brewery.name);
    // }

    const food = useContext(AppContext);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Button title="Go Back" onPress={props.navigation.goBack} />
                <Text style={styles.title}>{food.name}</Text>
                <Text style={styles.subTitle}>Calories: {food.calories}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="name"
                    onChangeText={(text) => food.setName(text)}
                    value={food.name}
                />
                <TextInput
                    style={styles.input}
                    placeholder="calories"
                    onChangeText={(text) => food.setCalories(text)}
                    value={food.calories}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        margin: 16,
    },
    title: {
        fontSize: 40,
        color: "purple",
    },
    subTitle: {
        fontSize: 22,
        margin: 16,
        color: "blue",
    },
    input: {
        height: 40,
        padding: 8,
        margin: 8,
        borderColor: "gray",
        borderWidth: 1,
        fontSize: 20,
        width: 100,
    },
});

export default ThirdComponent;
