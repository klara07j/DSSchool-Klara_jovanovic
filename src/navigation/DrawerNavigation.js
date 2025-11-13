import { createDrawerNavigator } from "@react-navigation/drawer";
import { AboutStackNavigator, ContactStackNavigator, ProfileStackNavigator } from "./StackNavigator";
import BottomTabNavigator from "./TabNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import list from "../components/screen.js";
import { FlatList,View,Text,TouchableOpacity } from "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

{/*const DrawerNavigator = () => {
    return(
        <Drawer.Navigator screenOptions={{
            drawerActiveBackgroundColor: "#3e0656ff",
            drawerActiveTintColor: "white",
            
        }}>
            <Drawer.Screen name="Home" component={BottomTabNavigator} 
                options={{
                    drawerIcon: ({focused, color, size}) => (
                        <MaterialCommunityIcons 
                            name={focused ? "home" : "home-outline"} 
                            size={22}
                            color={color}
                        />                
                    ),
                }}
            />
            <Drawer.Screen name="About" component={AboutStackNavigator} 
                options={{
                    drawerIcon: ({focused, color, size}) => (
                        <MaterialCommunityIcons 
                            name={focused ? "information" : "information-outline"} 
                            size={22}
                            color={color}
                        />                
                    ),
                }}
            />
            <Drawer.Screen name="Contact" component={ContactStackNavigator} 
                options={{
                    drawerIcon: ({focused, color, size}) => (
                        <MaterialCommunityIcons 
                            name={focused ? "contacts" : "contacts-outline"} 
                            size={22}
                            color={color}
                        />                
                    ),
                }}
            />
            <Drawer.Screen name="Profile" component={ProfileStackNavigator} 
                options={{
                    drawerIcon: ({focused, color, size}) => (
                        <MaterialCommunityIcons 
                            name={focused ? "account-badge" : "account-badge-outline"} 
                            size={22}
                            color={color}
                        />                
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};*/}

class DrawerNavigator extends React.Component {
    constructor(props) {
        super();
        this.state = {
            screens: [],
        };
    }

    componentDidMount() {
        this.setState({
            screens: list,
        });
    }

    render() {
        const {screens} = this.state;
        return(
            <View>
                <FlatList
                  
                />
            </View>
        );
    }
}
<Drawer.screen name={screen.name} component={screen.component}  options={{
                    drawerIcon: () => (
                        <MaterialCommunityIcons 
                            name={screen.name} 
                            size={22}
                            color={"pink"}
                        />                
                    ),
                }}
 />

export default DrawerNavigator;