import React, { useContext, useState, useRef } from "react";
import { View, Button, SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEDIUM_GREY, YELLOW, SEPARATOR } from "./Constants/Colors";
import SpaceFiller from "./components/Placeholders/SpaceFiller";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { AppContext } from "./provider/ContextProvider";
import ScreenLoader from "./components/Loaders/ScreenLoader";
import Popup from "./components/Popup";

const FirstComponent = (props) => {
    const context = useContext(AppContext);
    const route = useRoute();

    const onPressMaeLoader = () => {
        context.setIsShowLoader(true);
        setTimeout(() => {
            context.setIsShowLoader(false);
        }, 3000);
    };
    const onPressShowAlert = () => {
        setShowAlert({
            visible: true,
            title: "Oh no!",
            description: "This is the description",
            onClose: onPressDismissAlert,
            primaryAction: {
                text: "Okay",
                onPress: onPressDismissAlert,
            },
        });
    };
    const onPressDismissAlert = () => {
        setShowAlert({});
    };

    const [showAlertPayload, setShowAlert] = useState({});

    function Separator({ noGutter }) {
        return (
            <View style={[styles.separator, noGutter && styles.separatorNoGutter]}>
                <SpaceFiller width="100%" height={1} backgroundColor={SEPARATOR} />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={props.navigation.openDrawer} style={styles.menuIcon}>
                    <FontAwesomeIcon icon={faBars} color={"#98a9b3"} size={28} />
                </TouchableOpacity>
                <Text style={styles.topBarText}>{route.name}</Text>
                <View style={styles.emptyRightIcon} />
            </View>
            <View style={{ flexDirection: "column", alignItems: "center", flex: 1 }}>
                <TouchableOpacity onPress={onPressMaeLoader} style={styles.button}>
                    <Text style={styles.buttonText}>
                        {`Test MAE Loader\n(Fade in, show 3s, then hide)`}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressShowAlert} style={styles.button}>
                    <Text style={styles.buttonText}>{`Test MAE Alert`}</Text>
                </TouchableOpacity>
                <View style={{ height: 30, width: "100%"}}>
                    <View style={{height:10}}/>
                    <Text style={styles.buttonText}>
                        {`Separator w gutter display:`}
                    </Text>
                    <Separator />
                    <View style={{height:10}}/>
                    <Text style={styles.buttonText}>
                        {`Separator w/o gutter display:`}
                    </Text>
                    <Separator noGutter />
                    <View style={{height:10}}/>
                </View>
            </View>

            <ScreenLoader showLoader={context.isShowLoader} />
            <Popup {...showAlertPayload} />
        </SafeAreaView>
    );
};

export default FirstComponent;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white",
    },
    topBar: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "grey",
        borderBottomWidth: 2,
    },
    menuIcon: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    topBarText: { alignSelf: "center", flex: 1, textAlign: "center" },
    emptyRightIcon: { width: 40, height: 40 },
    button: {
        width: "80%",
        height: 40,
        backgroundColor: "yellow",
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    buttonText: { textAlign: "center" },

    separator: {
        backgroundColor: MEDIUM_GREY,
        paddingBottom: 24,
        paddingHorizontal: 24,
    },
    separatorNoGutter: {
        paddingVertical: 0,
    },
});
