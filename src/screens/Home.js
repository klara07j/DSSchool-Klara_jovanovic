import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";
import Icon from "../components/Icon";
import data from "../data/products.json";
import Item from "../components/Item";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      place: [],
    };
  }

  componentDidMount() {
    this.setState({
      place: data,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.uvod}>
            <Text style={styles.txt}>"Travel far, travel smart."</Text>
          </View>
          <View style={styles.sliderContainer}>
            <Swiper
              autoplay={true}
              activeDotColor="rgb(5, 40, 49)"
              autoplayTimeout={5}
            >
              <View style={styles.item}>
                <Image
                  style={styles.imgItem}
                  source={require("../../assets/prva-slika.webp")}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.item}>
                <Image
                  style={styles.imgItem}
                  source={require("../../assets/druga-slika.webp")}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.item}>
                <Image
                  style={styles.imgItem}
                  source={require("../../assets/treca-slika.webp")}
                  resizeMode="cover"
                />
              </View>
            </Swiper>
          </View>
          <View style={styles.iconsContainer}>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => this.props.navigation.navigate("Italy")}>
              <Icon style={styles.icon} name="i-cursor" iconText="Italy"></Icon>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => this.props.navigation.navigate("France")}> 
              <Icon style={styles.icon} name="facebook" iconText="France"></Icon>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => this.props.navigation.navigate("USA")}> 
              <Icon style={styles.icon} name="usd" iconText="USA"></Icon>
            </TouchableOpacity>
          </View>

          <View style={styles.productsContainer}>
            <Text style={styles.title}>Popular Destinations</Text>
            <FlatList
              data={this.state.place.popular}
              renderItem={({ item }) => (
                <View>
                  <Item item={item} />
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  iconsContainer: {
    width: "100%",
    alignSelf: "center",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
uvod: {
  alignSelf: "center",
  marginTop: 20,
  marginBottom: 10
},
txt: {
  fontSize: 20,
  fontWeight: "bold",
  color: "#e923c5"
},
  icon: {
     width: '33%',
      height: 60,
      alignItems: "center",
      marginBottom: 15,
  },

  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },

  sliderContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 8,
  },

  imgItem: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  item: {
    flex: 1,
    justifyContent: "center",
  },

  productsContainer: {
    marginHorizontal: 20,
  },

  title: {
    marginTop: 35,
    fontSize: 30,
    fontWeight: "italic",
    marginBottom: 22,
    marginTop: 40,
    alignSelf: 'center',
  },
});

export default Home; 

//https://691ccee63aaeed735c9232a0.mockapi.io/api/images/images
