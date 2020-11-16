import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";
import { useSafeArea } from "react-native-safe-area-context";
import { hideMessage } from "react-native-flash-message";
import Typography from "../Fonts/Styled/Typography";
import { WHITE } from "../../Constants/Colors";
import Images from "../../assets";

const Toast = ({
    position,
    style,
    message: { message: toastMessage, onToastPress },
    onClose,
    ...other
}) => {
    const safeArea = useSafeArea();

    function handleClosePress() {
        if (typeof onClose === "function") onClose();
        else hideMessage();
    }

    function handleToastPress() {
        if (typeof onToastPress === "function") {
            onToastPress();
            hideMessage();
        } else {
            hideMessage();
        }
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleToastPress}
            style={[
                styles.toastContainer,
                styles.topToast,
                styles.bottomToast,
                position === "bottom" &&
                    safeArea.bottom > 0 && {
                        paddingBottom: safeArea.bottom,
                    },
                position === "top" &&
                    safeArea.top > 0 && {
                        paddingTop: safeArea.top,
                    },
                style,
            ]}
        >
            <View style={styles.toastContent}>
                <TouchableOpacity onPress={handleToastPress} style={styles.toastCopy}>
                    <Typography
                        textAlign="left"
                        fontSize={14}
                        fontWeight="600"
                        lineHeight={18}
                        color={WHITE}
                        text={toastMessage}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleClosePress} style={styles.toastClose}>
                    <Image source={Images.icCloseWhite} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

Toast.propTypes = {
    position: PropTypes.string,
    style: ViewPropTypes.style,
    message: PropTypes.object,
    toastMessage: PropTypes.string,
    onClose: PropTypes.func,
    onToastPress: PropTypes.func,
};

export default Toast;

const styles = StyleSheet.create({
    bottomToast: {
        paddingBottom: 20,
    },
    toastClose: {
        height: 20,
        width: 20,
    },
    toastContainer: {
        minHeight: 90,
        paddingHorizontal: 24,
    },
    toastContent: {
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    toastCopy: {
        flex: 0.95,
    },
    topToast: {
        paddingTop: 20,
    },
});
