import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import getReviews from "./reviews";

function Review({ name, text, avatar }) {
    return (
        <View style={styles.review}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <View style={{ flex: 1, flexWrap: "wrap" }}>
                <Text style={{ fontSize: 20 }}>{name}</Text>
                <Text>{text}</Text>
            </View>
        </View>
    );
}
export default class App extends React.Component {
    render() {
        const reviews = getReviews();
        return (
            <View style={styles.container}>
                <FlatList
                    data={reviews}
                    renderItem={({ item}) => (
                        <Review
                        {...item}
                        />
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    review: {
        margin: 10,
        flexDirection: "row"
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25
    }
});
