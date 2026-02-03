import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Switch } from 'react-native';
import data from '../data/products.json';
import { ScrollView } from 'react-native-gesture-handler';
import Item from '../components/Item';

class France extends Component {
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
    const franceLenght = this.state.places.france.length;
    this.setState(prevState => ({
      visibleCount: Math.min(prevState.visibleCount + 2, franceLenght),
    }));
  };

  render() {
    const{ places, visibleCount} = this.state;
    if (!places.france) return null;
    return (
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.desc}>FRANCE</Text>
            <FlatList
              data={places.france.slice(0, visibleCount)}
              renderItem={({ item }) => (
                <View>
                  <Item item={item} />
                </View>
              )}
            />
            {visibleCount < places.france.length && (
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
      color: "#141d9d"
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

export default France;
