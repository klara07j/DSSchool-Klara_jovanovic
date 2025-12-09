import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Single = ({ navigation, 
    route: {params: {item},},}) => (
    <View style={styles.container}>
        <View style={styles.imgContainer}>
            <Image style={styles.img} source = {{uri: `${item.image}` }}/>
        </View>
        <View style={styles.cardHeader}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.name}>{item.price}</Text>
        </View>
        <Text style={styles.desc}>{item.description}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
            <Text style={styles.btnText}>GO BACK</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
    },
    imgContainer: {
        width: "90%",
        height: 400,
        borderRadius: 12,
    },
    img: {
        width: '100%',
        height: "100%",
        borderRadius: 12,
        resizeMode: "cover",
    },
    cardHeader: {
        marginTop: 15,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 25,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "#070639",
    },
    desc: {
        width: "90%",
        marginTop: 35,
        textAlign: "center",
    },
    btn: {
        backgroundColor: "#22D4FF",
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
        marginTop: 20,
        width: 200,
    },
    btnText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    }
});

export default Single;