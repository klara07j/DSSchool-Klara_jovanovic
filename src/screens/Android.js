import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Switch } from 'react-native';
import data from '../data/products.json';
import { ScrollView } from 'react-native-gesture-handler';
import Item from '../components/Item';

class Andriod extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: [],
        showInStockOnly: false,
    };
  }

  componentDidMount() {
    this.setState({
        products: data.android,
    });
  }

  getFilteredProducts = () => {
    const {products,showInStockOnly} = this.state;
    if(!showInStockOnly){
      return products;
    }
    return products.filter(item => item.stock === "In stock");
  };

  render() {
    const filteredProducts = this.getFilteredProducts();
    return (
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.desc}>Android Products</Text>
            <View style={styles.filterContainer}>
              <Text style={styles.filterText}>Prikaži samo na zalihi:</Text>
              <Switch
                onValueChange={(value) => this.setState({showInStockOnly: value})}
                value={this.state.showInStockOnly}/>
            </View>
            <FlatList
              data={filteredProducts}
              renderItem={({ item }) => (
                <View>
                  <Item item={item} />
                </View>
              )}
            />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>View More</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignSelf: 'center',
        padding: 20,
    },
    desc: {
        marginBottom: 20,
    },
    filterContainer: {
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: "#5de0aeff",
      marginHorizontal: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    filterText: {
      color: "#fff",
      fontSize: 16,
    },
    btn: {
    backgroundColor: "#22D4FF",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
    },
    btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    },
});

export default Andriod;
