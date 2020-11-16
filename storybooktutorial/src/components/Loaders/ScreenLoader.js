import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import * as Animatable from "react-native-animatable";
import PropTypes from "prop-types";

const ScreenLoader = ({ showLoader }) =>
    showLoader ? (
        <Animatable.View animation="fadeIn" duration={300} style={styles.container}>
            <LottieView
                style={styles.lottieView}
                source={require("../../assets/lottie/mae-loader.json")}
                autoPlay
                loop
            />
        </Animatable.View>
    ) : null;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "white",
        bottom: 0,
        flex: 1,
        justifyContent: "center",
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
    },
    lottieView: {
        height: 135,
        width: 135,
    },
});

ScreenLoader.propTypes = {
    showLoader: PropTypes.bool.isRequired,
};

export default ScreenLoader;
