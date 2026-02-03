import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Icon = ( props ) => (
    <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
            <FontAwesome name={props.name} size={20} color={"rgb(167, 21, 170)"} />
        </View>
        <Text style={styles.iconText}>{props.iconText}</Text>
    </View>
);

const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: '#a7b2cd',
        width: '90%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        width: '43%',
        height: 60,
        alignItems: "center",
        marginBottom: 25,

    },
    iconText: {
        height: 30,
        fontWeight: 600,
    },
});

export default Icon;
