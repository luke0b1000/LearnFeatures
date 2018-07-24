import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';


export default class App extends React.Component{
    render() {
        const {width, height} = Dimensions.get('window');
        return (
            <View style={styles.container}>
                <Text>Width: {width}</Text>
                <Text>Height: {height}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})