import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Icon = ( props ) => (
    <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
            <MaterialCommunityIcons name={props.name} size={20} color={"#e724bdff"} />
        </View>
        <Text style={styles.iconText}>{props.iconText}</Text>
    </View>
);

const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: '#384053',
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    iconContainer: {
        width: '33%',
        height: 60,
        alignItems: "center",
        marginBottom: 15,

    },
    iconText: {
        height: 20,
        fontWeight: 600,
    },
});

export default Icon;
