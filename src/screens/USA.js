import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import data from '../data/products.json';
import { ScrollView } from 'react-native-gesture-handler';
import Item from '../components/Item';

class USA extends Component {
  constructor(props) {
    super(props);
    this.state = {
        places: [],
        visibleCount: 2,
    };
  }

  componentDidMount() {
    this.setState({
        places: data,
    });
  }

  handleViewMore = () => {
    const usaLenght = this.state.places.usa.length;
    this.setState(prevState => ({
      visibleCount: Math.min(prevState.visibleCount + 2, usaLenght),
    }));
  };

  render() {
    const{ places, visibleCount} = this.state;
    if (!places.usa) return null;
    return (
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.desc}>USA</Text>
            <FlatList
              data={places.usa.slice(0, visibleCount)}
              renderItem={({ item }) => (
                <View>
                  <Item item={item} />
                </View>
              )}
            />
            {visibleCount < places.usa.length && (
            <TouchableOpacity style={styles.btn} onPress={this.handleViewMore}>
              <Text style={styles.btnText}>View More</Text>
            </TouchableOpacity>
          )}
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
      alignSelf: "center",
      fontWeight: "bold",
      fontStyle: "italic",
      fontSize: 20,
      color: "#e52914"
    },
    btn: {
    backgroundColor: "#f119cd",
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

export default USA;
