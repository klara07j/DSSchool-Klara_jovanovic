import React from "react";
import {View, Text, StyleSheet, Button, Image} from "react-native";
import Swiper from "react-native-swiper";

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <Swiper
                    autoplay={true}
                    activeDotColor="#22D4FF"
                    autoplayTimeout={5}
                >
                    <View style={styles.item}>
                        <Image
                            style={styles.imgItem} 
                            source={require('../../assets/baner1.webp')} 
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.item}>
                        <Image
                            style={styles.imgItem} 
                            source={require('../../assets/baner2.webp')} 
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.item}>
                        <Image
                            style={styles.imgItem} 
                            source={require('../../assets/baner3.webp')} 
                            resizeMode="cover"
                        />
                    </View>
                </Swiper>
            
                <Swiper style={styles.swiper}
                    autoplay={true}
                    activeDotColor="#16d443ff"
                    autoplayTimeout={3}
                >
                    <View style={styles.item1}>
                        <Text style={styles.txt}>1</Text>
                    </View>
                    <View style={styles.item2}>
                       <Text style={styles.txt}>2</Text>
                    </View>
                    <View style={styles.item3}>
                        <Text style={styles.txt}>3</Text>
                    </View>
                </Swiper>
            </View>
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
    /*kk: {
        marginBottom: 50,
    },*/
    sliderContainer: {
        width: "90%",
        height: 400,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        borderRadius: 8,
    },
    imgItem: {
        width: '100%',
        height: "100%",
        borderRadius: 8,
    },
    item: {
        flex: 1,
        justifyContent: "center",
    },
    swiper: {
        marginTop: 20,
        height: "100%",
    },
    txt: {
        fontSize: 20,
        textAlign: "center",
    },
    item1: {
        height: "100%",
        backgroundColor: "#4e48bdff",
        justifyContent: "space-evenly",
    },
     item2: {
        height: "100%",
        backgroundColor: "#9f1b2dff",
        justifyContent: "space-evenly",
    },
     item3: {
        height: "100%",
        backgroundColor: "#b18923ff",
        justifyContent: "space-evenly",
    },
});

export default Home;

//https://691ccee63aaeed735c9232a0.mockapi.io/api/images/images
