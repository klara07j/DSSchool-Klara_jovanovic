import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ChecklistScreen() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Rezerviraj hotel", done: false },
    { id: 2, text: "Kupi avionsku kartu", done: false },
    { id: 3, text: "Spakuj kofere", done: false },
    { id: 4, text: "Napravi plan obilaska", done: false },
    { id: 5, text: "Ponesi dokumente", done: false },
    { id: 6, text: "Rezerviraj transfer s aerodroma", done: false },
    { id: 7, text: "Kupiti putno osiguranje", done: false },
    { id: 8, text: "Napraviti kopije dokumenata", done: false },
    { id: 9, text: "Provjeriti vremensku prognozu", done: false },
    { id: 10, text: "Skinuti offline mape", done: false },
    { id: 11, text: "Promijeniti valutu / provjeriti kartice", done: false },
    { id: 12, text: "Rezervirati restorane ili ture", done: false },
    { id: 13, text: "Napraviti listu hitnih kontakata", done: false },
    { id: 14, text: "Napuni telefon i power bank", done: false }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Checklist</Text>

      {tasks.map(item => (
        <TouchableOpacity
          key={item.id}
          style={styles.row}
          onPress={() => toggleTask(item.id)}
        >
          <Text style={styles.checkbox}>
            {item.done ? "☑" : "☐"}
          </Text>

          <Text
            style={[
              styles.text,
              item.done && styles.strike
            ]}
          >
            {item.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    alignSelf: 'center',
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15
  },
  checkbox: {
    fontSize: 22,
    marginRight: 10
  },
  text: {
    fontSize: 18
  },
  strike: {
    textDecorationLine: "line-through",
    color: "gray"
  }
});
