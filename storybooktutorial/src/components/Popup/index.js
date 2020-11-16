import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { BlurView } from "@react-native-community/blur";
import { Dialog } from "react-native-simple-dialogs";
import Typography from "../Fonts/Styled/Typography";
import ActionButton from "../../components/Buttons/Styled/ActionButton";
import Images from "../../assets";
import { YELLOW, WHITE, ROYAL_BLUE, GREY } from "../../Constants/Colors";

const TRANSPARENT = "transparent";

const styles = StyleSheet.create({
    blur: {
        bottom: 0,
        elevation: 99,
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
        // zIndex: 999,
    },
    closeButton: {
        height: 20,
        width: 20,
    },
    contentStyle: {
        padding: 0,
        paddingTop: 0,
    },
    dialogActionContainer: {
        paddingHorizontal: 40,
    },
    dialogCloseContainer: {
        position: "absolute",
        right: 20,
        top: 20,
        zIndex: 7,
    },
    dialogContainer: {
        backgroundColor: WHITE,
        borderRadius: 8,
        position: "relative",
    },
    dialogDescriptionContainer: {
        paddingBottom: 40,
        paddingHorizontal: 40,
    },
    dialogInnerContainer: {
        flexDirection: "column",
        paddingBottom: 16,
        paddingHorizontal: 40,
        paddingTop: 40,
    },
    dialogTitleOvewrite: {
        margin: 0,
    },
    overlayStyle: {
        backgroundColor: TRANSPARENT,
    },
    primaryFooterButton: {
        borderColor: GREY,
        borderWidth: 1,
        // paddingHorizontal: 30,
        // paddingVertical: 12,
    },
    primaryFooterContainer: {
        flexDirection: "row",
        paddingRight: 4,
        width: "50%",
    },
    primarySecondaryActionContainer: {
        flexDirection: "row",
        paddingBottom: 40,
        width: "100%",
    },
    primaryWithoutSiblings: {
        paddingBottom: 40,
    },
    secondaryButtonSingle: {
        borderColor: GREY,
        borderWidth: 1,
    },
    secondaryFooterButton: {
        // paddingHorizontal: 30,
        // paddingVertical: 12,
    },
    secondaryFooterContainer: {
        flexDirection: "row",
        paddingLeft: 4,
        width: "50%",
    },
    textLinkContainer: {
        paddingBottom: 24,
        paddingTop: 16,
    },
    textLinkContainerSingle: {
        paddingBottom: 40,
    },
});

const Popup = ({
    visible,
    onClose,
    title,
    description,
    ContentComponent,
    primaryAction,
    secondaryAction,
    textLink,
    hideCloseButton,
}) => {
    if (!visible) return null;
    return (
        <>
            <BlurView style={styles.blur} blurType="dark" blurAmount={10} />

            <Dialog
                visible
                onTouchOutside={onClose}
                animationType="fade"
                onRequestClose={onClose}
                dialogStyle={styles.dialogContainer}
                titleStyle={styles.dialogTitleOvewrite}
                contentStyle={styles.contentStyle}
                buttonsStyle={styles.contentStyle}
                overlayStyle={styles.overlayStyle}
            >
                {!hideCloseButton && (
                    <View style={styles.dialogCloseContainer}>
                        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                            <Image style={{}} source={Images.icCloseBlack} />
                        </TouchableOpacity>
                    </View>
                )}
                {ContentComponent ? (
                    <ContentComponent />
                ) : (
                    <>
                        <View style={styles.dialogInnerContainer}>
                            <View style={styles.dialogSectionContainer}>
                                <Typography
                                    text={title}
                                    textAlign="left"
                                    fontSize={14}
                                    lineHeight={18}
                                    fontWeight="600"
                                />
                            </View>
                        </View>
                        <View style={styles.dialogDescriptionContainer}>
                            <Typography
                                text={description}
                                textAlign="left"
                                fontSize={14}
                                lineHeight={20}
                                fontWeight="normal"
                            />
                        </View>
                        <View style={styles.dialogActionContainer}>
                            {primaryAction && !secondaryAction && (
                                <View style={!textLink && styles.primaryWithoutSiblings}>
                                    <ActionButton
                                        fullWidth
                                        borderRadius={24}
                                        height={40}
                                        onPress={primaryAction.onPress}
                                        backgroundColor={YELLOW}
                                        componentCenter={
                                            <Typography
                                                text={primaryAction.text}
                                                fontSize={14}
                                                fontWeight="600"
                                                lineHeight={18}
                                                numberOfLines={1}
                                                textBreakStrategys="simple"
                                            />
                                        }
                                    />
                                </View>
                            )}
                            {secondaryAction && !primaryAction && (
                                <View style={!textLink && styles.primaryWithoutSiblings}>
                                    <ActionButton
                                        fullWidth
                                        borderRadius={24}
                                        height={40}
                                        onPress={secondaryAction.onPress}
                                        backgroundColor={WHITE}
                                        style={styles.secondaryButtonSingle}
                                        componentCenter={
                                            <Typography
                                                text={secondaryAction.text}
                                                fontSize={14}
                                                fontWeight="600"
                                                lineHeight={18}
                                                numberOfLines={1}
                                                textBreakStrategys="simple"
                                            />
                                        }
                                    />
                                </View>
                            )}
                            {textLink && !secondaryAction && (
                                <View
                                    style={[
                                        styles.textLinkContainer,
                                        !primaryAction && styles.textLinkContainerSingle,
                                    ]}
                                >
                                    <TouchableOpacity onPress={textLink.onPress}>
                                        <Typography
                                            color={ROYAL_BLUE}
                                            text={textLink.text}
                                            fontSize={14}
                                            fontWeight="600"
                                            lineHeight={18}
                                            numberOfLines={1}
                                            textBreakStrategys="simple"
                                        />
                                    </TouchableOpacity>
                                </View>
                            )}
                            {primaryAction && secondaryAction && (
                                <View style={styles.primarySecondaryActionContainer}>
                                    <View style={styles.primaryFooterContainer}>
                                        <ActionButton
                                            fullWidth
                                            borderRadius={20}
                                            height={40}
                                            onPress={secondaryAction.onPress}
                                            backgroundColor={WHITE}
                                            style={styles.primaryFooterButton}
                                            componentCenter={
                                                <Typography
                                                    text={secondaryAction.text}
                                                    fontSize={14}
                                                    fontWeight="600"
                                                    lineHeight={18}
                                                    numberOfLines={1}
                                                    textBreakStrategys="simple"
                                                />
                                            }
                                        />
                                    </View>
                                    <View style={styles.secondaryFooterContainer}>
                                        {/* <TouchableOpacity
                                            style={{
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: YELLOW,
                                                borderRadius: 20,
                                                height: 40,
                                                width: "100%",
                                                flexDirection: "row",
                                            }}
                                        >
                                            <View style={{ flex: 1 }}>
                                                <Typography
                                                    text={primaryAction.text}
                                                    fontSize={14}
                                                    fontWeight="600"
                                                    lineHeight={18}
                                                    numberOfLines={1}
                                                    textBreakStrategys="simple"
                                                />
                                            </View>
                                        </TouchableOpacity> */}
                                        <ActionButton
                                            fullWidth
                                            borderRadius={20}
                                            height={40}
                                            onPress={primaryAction.onPress}
                                            backgroundColor={YELLOW}
                                            componentCenter={
                                                <Typography
                                                    text={primaryAction.text}
                                                    fontSize={14}
                                                    fontWeight="600"
                                                    lineHeight={18}
                                                    numberOfLines={1}
                                                    textBreakStrategys="simple"
                                                />
                                            }
                                            style={styles.secondaryFooterButton}
                                        />
                                    </View>
                                </View>
                            )}
                        </View>
                    </>
                )}
            </Dialog>
        </>
    );
};

Popup.propTypes = {
    visible: PropTypes.bool,
    hideCloseButton: PropTypes.bool,
    ContentComponent: PropTypes.func,
    onClose: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string,
    primaryAction: PropTypes.shape({
        text: PropTypes.string,
        onPress: PropTypes.func,
    }),
    secondaryAction: PropTypes.shape({
        text: PropTypes.string,
        onPress: PropTypes.func,
    }),
    textLink: PropTypes.shape({
        text: PropTypes.string,
        onPress: PropTypes.func,
    }),
};

export default Popup;
