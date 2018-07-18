import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Switch,
    TextInput,
    KeyboardAvoidingView
} from "react-native";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{
                        uri:
                            "https://tylermcginnis.com/tylermcginnis_glasses-300.png"
                    }}
                    style={styles.img}
                />
                <View style={{margin:50}} />
                <Image
                    source={require("./Image/tylermcginnis.png")}
                    style={styles.img}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50
    }
});
