import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import USA from "../screens/USA";
import Italy from "../screens/Italy";
import France from "../screens/France";
import Single from "../screens/Single";
import Checklist from "../screens/Checklist";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#690d6b",
    },
    headerTintColor: "white",
};

const MainStackNavigator = ({ navigation }) => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="France" component={France} />
            <Stack.Screen name="Italy" component={Italy} />
            <Stack.Screen name="USA" component={USA} />
            <Stack.Screen name="Checklist" component={Checklist} />
            <Stack.Screen name="Single" component={Single} />
        </Stack.Navigator>
    );
};

export {MainStackNavigator};