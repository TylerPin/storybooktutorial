import React from "react";
import { Text } from "react-native";
import Proptypes from "prop-types";
import { BLACK } from "../../../Constants/Colors";

const fontFamilyWeight = {
    "100": "-Thin",
    "200": "-ExtraLight",
    "300": "-Light",
    "400": "-Regular",
    "500": "-Medium",
    "600": "-SemiBold",
    "700": "-Bold",
    "800": "-ExtraBold",
    "900": "-Black",
    normal: "-Regular",
    "semi-bold": "-SemiBold",
    bold: "-Bold",
};

const fontFamilyItalic = {
    "100": "-ThinItalic",
    "200": "-ExtraLightItalic",
    "300": "-LightItalic",
    "400": "-Regular",
    "500": "-MediumItalic",
    "600": "-SemiBoldItalic",
    "700": "-BoldItalic",
    "800": "-ExtraBoldItalic",
    "900": "-BlackItalic",
    normal: "-Regular",
    "semi-bold": "-SemiBoldItalic",
    bold: "-BlackItalic",
};

const Typography = ({
    fontSize,
    fontWeight,
    fontStyle,
    lineHeight,
    letterSpacing,
    textAlign,
    color,
    children,
    text,
    style,
    ...props
}) => {
    return (
        <Text
            allowFontScaling={false}
            style={[
                {
                    fontFamily: `Montserrat${
                        fontWeight
                            ? fontStyle === "italic"
                                ? fontFamilyItalic[fontWeight]
                                : fontFamilyWeight[fontWeight]
                            : ""
                    }`,
                },
                {
                    fontSize,
                    lineHeight,
                    letterSpacing,
                    textAlign,
                    color,
                },
                style,
            ]}
            {...props}
        >
            {children || text}
        </Text>
    );
};

Typography.propTypes = {
    fontSize: Proptypes.number,
    fontWeight: Proptypes.string,
    fontStyle: Proptypes.string,
    lineHeight: Proptypes.number,
    letterSpacing: Proptypes.number,
    textAlign: Proptypes.string,
    color: Proptypes.string,
    children: Proptypes.element,
    text: Proptypes.string,
    style: Text.propTypes.style,
};

Typography.defaultProps = {
    fontSize: 14,
    // fontFamily: "montserrat",
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 14,
    letterSpacing: 0,
    textAlign: "center",
    color: BLACK,
};

const Memoiz = React.memo(Typography);

export default Memoiz;
