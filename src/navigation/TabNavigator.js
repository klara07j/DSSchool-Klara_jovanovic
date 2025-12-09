import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, AboutStackNavigator, ProfileStackNavigator, ContactStackNavigator, SettingsStackNavigator} from "./StackNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Ios from "../screens/Ios";
import Andriod from "../screens/Android";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#4ad175ff",
                tabBarInactiveTintColor: "lightgray",
                tabBarStyle: {
                    backgroundColor: "#384053",
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                headerShown: false,
            }}
        >
            <Tab.Screen name="Home"
            component={MainStackNavigator} 
            options={{
                tabBarLabel: "Home",
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name= "home" size={26} color={"#bad619ff"} />
                )
            }}
            />
            <Tab.Screen name="About"
            component={AboutStackNavigator} 
            options={{
                tabBarLabel: "About",
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name= "video-stabilization" size={26} color={color} />
                )
            }}
            />
            <Tab.Screen name="Profile"
            component={ProfileStackNavigator} 
            options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name= "face-man-profile" size={26} color={"#13e5edff"} />
                )
            }}
            />
            <Tab.Screen name="Contact"
            component={ContactStackNavigator} 
            options={{
                tabBarLabel: "Contact",
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name= "contacts" size={26} color={color} />
                )
            }}
            />
            <Tab.Screen name="Settings"
            component={SettingsStackNavigator} 
            options={{
                tabBarLabel: "Settings",
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name= "account-settings" size={26} color={color} />
                )
            }}
            />
            <Tab.Screen name="Ios"
            component={Ios} 
            options={{
                tabBarLabel: "iOS",
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name= "apple" size={26} color={color} />
                )
            }}
            />
            <Tab.Screen name="android"
            component={Andriod} 
            options={{
                tabBarLabel: "Android",
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name= "android" size={26} color={color} />
                )
            }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;