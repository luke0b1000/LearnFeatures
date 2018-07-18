import React from "react";
import { StyleSheet, Text, View, Slider } from "react-native";

export default class App extends React.Component {
    state = {
        value1: 0,
        value2: 0,
        value3: 0
    };
    render() {
        return (
            <View style={styles.container}>
                <Slider
                    value={this.state.value1}
                    onValueChange={value1 => {
                        this.setState({ value1 });
                    }}
                />
                <Text>{this.state.value1}</Text>
                <Slider
                    minimumValue={Number(-10)}
                    maximumValue={10}
                    value={this.state.value2}
                    onValueChange={value2 => {
                        this.setState({ value2 });
                    }}
                />
                <Text>MAX/MIN - {this.state.value2}</Text>
                <Slider
                    minimumValue={-10}
                    maximumValue={10}
                    step={1}
                    value={this.state.value3}
                    onValueChange={value3 => {
                        this.setState({ value3 });
                    }}
                />
                <Text>FULL NUMBERES {this.state.value3}</Text>
            </View>
        );
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
