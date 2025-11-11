import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const Profile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Profile Page</Text>
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
    txt: {
        fontSize: 20,
    }
});

export default Profile;