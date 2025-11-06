import React from "react";
import {View, Text, StyleSheet, Button, Flatlist} from "react-native";

const About = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Welcome to About screen</Text>
            <Button title="Go to Home Screen"
                onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default About;