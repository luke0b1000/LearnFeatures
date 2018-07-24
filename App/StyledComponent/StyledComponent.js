import React from "react";
import { Text, View } from "react-native";

import styled from "styled-components/native";

const CenterView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: #333;
`;

const WelcomeText = styled.Text`
    color: white;
    font-size: 20;
`;

const WelcomeBtn = styled.TouchableOpacity`
    width: 100px;
    height: 50px;
    background: red;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

export default class App extends React.Component {
    render() {
        return (
            <CenterView>
                <WelcomeText>Different!</WelcomeText>
                <WelcomeBtn onPress={() => alert("Hello!")}>
                    <WelcomeText>Push ME</WelcomeText>
                </WelcomeBtn>
            </CenterView>
        );
    }
}
