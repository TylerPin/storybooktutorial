import React from "react";
import { View, TouchableOpacity, StyleSheet, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";
import { debounce } from "lodash";

const BaseButton = ({ onPress, children, style, fullWidth, ...props }) => {
    function handlePress() {
        const debounceFn = debounce(onPress, 0);

        debounceFn();
    }

    if (fullWidth)
        return (
            <TouchableOpacity onPress={handlePress} style={styles.container} {...props}>
                <View style={style}>{children}</View>
            </TouchableOpacity>
        );
    return (
        <TouchableOpacity onPress={handlePress} {...props}>
            <View style={style}>{children}</View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
});

BaseButton.propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.element.isRequired,
    style: ViewPropTypes.style,
    fullWidth: PropTypes.bool,
};

BaseButton.defaultProps = {
    style: {},
    fullWidth: false,
    onPress: () => {},
};

export default BaseButton;
