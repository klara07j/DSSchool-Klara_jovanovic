import React from "react";
import {View, Text, StyleSheet, Button, Image, FlatList, TouchableOpacity, ScrollView} from "react-native";
import Swiper from "react-native-swiper";
import Icon from "../components/Icon";
import data from '../../data/products.json';
import Item from '../components/Item';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        this.setState({
            products: data,
        });
    }

    render() {
         return (
            <ScrollView>
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
                    <View style={styles.productsContainer}>
                        <Text style={styles.title}>Most Popular Products</Text>
                        <FlatList
                            data={this.state.products.popuarproducts}
                            renderItem={({ item }) => (
                                <View>
                                    <Item item={item}/>
                                </View>
                            )}
                        />
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>View More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

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
    productsContainer: {
        marginHorizontal: 20,
    },
    title: {
        marginTop: 35,
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },
    btn: {
        backgroundColor: "#22D4FF",
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
        marginBottom: 20,
    },
    btnText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default Home;

//https://691ccee63aaeed735c9232a0.mockapi.io/api/images/images
