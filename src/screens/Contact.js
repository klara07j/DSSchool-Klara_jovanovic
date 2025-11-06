import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const Contact = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Contact Page</Text>
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

export default Contact;