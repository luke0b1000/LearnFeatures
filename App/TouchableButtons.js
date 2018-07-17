import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback
} from "react-native";

export default class App extends React.Component {
    handlePress = () => {
        alert("Hello World!");
    };
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>TouchableHighlight</Text>
                    <Text>
                        Transform from [styles.btn] primary color to
                        [underlayColor] another color when press
                    </Text>
                    <TouchableHighlight
                        style={styles.btn}
                        onPress={this.handlePress}
                        underlayColor="#d4271b"
                    >
                        <Text style={styles.btnText}>TouchableHighlight</Text>
                    </TouchableHighlight>
                    <Text> - </Text>
                </View>
                <View>
                    <Text>TouchableOpacity</Text>
                    <Text>
                        When you hold down button it shows the opacity,
                        background shines through
                    </Text>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.handlePress}
                    >
                        <Text style={styles.btnText}>TouchableOpacity</Text>
                    </TouchableOpacity>
                    <Text> - </Text>
                </View>
                <View>
                    <Text>TouchableWithoutFeedback</Text>
                    <Text>
                        No Feedback and NEEDS View as the only Child and View
                        has the style
                    </Text>
                    <TouchableWithoutFeedback onPress={this.handlePress}>
                        <View style={styles.btn}>
                            <Text>TouchableWithoutFeedback</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <Text> - </Text>
                </View>
                <View>
                    <Text>TouchableNativeFeedback</Text>
                    <Text>Only Works on Android and gives the ripple of where you press and View as Child</Text>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={this.handlePress}>
                        <View style={styles.btn}>
                            <Text>TouchableNativeFeedback</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    btn: {
        backgroundColor: "#E53224",
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    btnText: {
        color: "#fff"
    }
});
