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
        height: 200,
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
});

export default Home;