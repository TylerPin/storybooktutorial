import Reactotron from "reactotron-react-native";

import AsyncStorage from "@react-native-community/async-storage";

if (__DEV__) {
    Reactotron.setAsyncStorageHandler(AsyncStorage)
        .configure({
            // host: "192.168.0.185", // use when tethered to physical device
            name: "MAE",
        })
        .useReactNative({
            errors: { veto: (frame) => frame.fileName.indexOf("/node_modules/react-native/") >= 0 },
        });

    Reactotron.connect();
    Reactotron.clear();

    console.tron = Reactotron;
} else {
    console.tron = console;
}
