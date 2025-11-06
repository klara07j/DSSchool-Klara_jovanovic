import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Welcome to Home screen</Text>
            <Button style={styles.btn}
                title="Go to About Screen"
                onPress={() => navigation.navigate("About")} />
            <Button title="Go to Contact Page"
                onPress={() => navigation.navigate("Contact")} />
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
    btn: {
        marginBottom: 50,
    },
});

export default Home;