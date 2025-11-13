import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Welcome to Home screen</Text>
            <Button style={styles.kk}
                title="Go to About Screen"
                onPress={() => navigation.navigate("About")} />
            <Text>Drawer Navigation Button Functionality</Text>
            <Button style={styles.kk}
                title="Open Drawer"
                onPress={() => navigation.openDrawer()} />
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
    kk: {
        marginBottom: 50,
    },
});

export default Home;