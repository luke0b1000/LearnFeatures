import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
    render() {
        return <View style={styles.container} />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "stretch",
        justifyContent: "center"
    }
});
