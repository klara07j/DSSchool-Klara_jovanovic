import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Single = ({ navigation, 
    route: {params: {item},},}) => (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.name}>{item.city}</Text>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source = {{uri: `${item.image}` }}/>
                </View>
                <View style={styles.cardHeader}>
                
                    <Text style={styles.country}>{item.country}</Text>
                </View>
                <Text style={styles.desc}>{item.description}</Text>
                <Text>{item.moze}</Text>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
                    <Text style={styles.btnText}>NATRAG</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
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
        marginTop: 12,
        width: '80%',
    },
    name: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 20,
        textTransform: "uppercase",
        color: "#070639",
    },
    country: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10
    },
    desc: {
        width: "90%",
        marginTop: 15,
        textAlign: "center",
    },
    btn: {
        backgroundColor: "#ea26f1",
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