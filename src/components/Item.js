import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,} from 'react-native';


const Item = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Single", {item})}>
            <View style={styles.cardContainer}>
                <View>
                    <Image style={styles.img} source={{ uri: `${item.image}` }} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.city}>{item.city}</Text>
                    <Text style={styles.country}>{item.country}</Text>
                    <Text style={styles.desc}>{item.description}</Text>
                    <Text style={styles.price}>Cijena: {item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        height: 180,
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: 8,
        marginBottom: 16,
    },
    img: {
        width: 100,
        height: '90%',
        resizeMode: "cover",
        borderRadius: 8,
        marginTop: 5,
    },
    textContainer: {
        paddingHorizontal: 10,
        marginVertical: 10,
        width: '70%',
    },
    city: {
        fontWeight: "bold",
        fontSize: 16,
    },
    desc: {
        fontStyle: "italic",
    },
    price: {
        fontWeight: "bold",
        marginTop: 5,
        backgroundColor: "rgb(87, 15, 62)",
        color: "white",
        borderRadius: 100,
        paddingHorizontal: 5,
        width: 90,
        height: 25
    },
    country:{
        marginBottom: 8,
        marginTop: 6,
    }
});

export default Item;