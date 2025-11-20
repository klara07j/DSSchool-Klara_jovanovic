import React from "react";
import {View, Text, StyleSheet, Button, Image} from "react-native";
import Swiper from "react-native-swiper";
import Icon from "../components/Icon";

const Home = ({navigation}) => {

    const icons = [
        {name: "cellphone", iconText: "Iphone", color: "#f0a255ff", size: 27},
        {name: "android", iconText: "Samsung", color: "#efe81fff", size: 24},
        {name: "laptop", iconText: "Laptop", color: "#6daedfff", size: 24},
        {name: "tablet", iconText: "Tablet", color:"#c954eaff", size: 27},
        {name: "mouse", iconText:"Mouse", color:"#e06380ff", size: 29},
        {name: "keyboard-outline", iconText: "Keyboard", color: "#ac9de9ff", size: 27},
    ]; 

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
                <View style={styles.iconWrapper}>
                    <View style={styles.grid}>
                        {icons.map((item, index) => (
                            <Icon
                                key={index}
                                name={item.name}
                                iconText={item.text}
                                color={item.color}
                                size={item.size}
                            />
                        ))}
                    </View>
                </View>
            </View>
                {/*<Swiper style={styles.swiper}
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
            <View style={styles.iconsContainer}>
                <Icon name="cellphone" iconText="Iphone" color="#f0a255ff" size={27}></Icon>
                <Icon name="android" iconText="Samsung" color="#efe81fff" size={24}></Icon>
                <Icon name="laptop" iconText="Laptop" color="#6daedfff" size={24}></Icon>
            </View>
            <View style={styles.iconsContainer}>
                <Icon name="tablet" iconText="Tablet" color="#c954eaff" size={27}></Icon>
                <Icon name="mouse" iconText="Mouse" color="#e06380ff" size={29}></Icon>
                <Icon name="keyboard-outline" iconText="Keyboard" color="#ac9de9ff" size={27}></Icon>
            </View>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    iconWrapper: {
        flex: 1,
        backgroundColor: "#fff",
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-beetwen',
        width: "90%",
        alignSelf: 'center',
        marginTop: 20,
    },
    iconsContainer: {
        width: '90%',
        alignSelf: "center",
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#ffff",
        alignItems: "center",
        justifyContent: "center",
    },
    /*kk: {
        marginBottom: 50,
    },*/
    sliderContainer: {
        height: 280,
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
