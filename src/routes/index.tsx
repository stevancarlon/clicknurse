import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { Home } from "../pages/Home";
import {
  Platform,
  StatusBar,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Layout } from "../components/_layout";
import React from "react";
import { Job } from "src/pages/Job";
import { Apply } from "src/pages/Apply";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "@react-native-community/blur";
import { Bookmarks } from "src/pages/Bookmarks";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const WrapLayout = (Component: React.ComponentType<any>) => (props: any) => (
  <Layout>
    <Component {...props} />
  </Layout>
);

export const Routes = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} backgroundColor={"black"} />
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName="Home"
      >
        <Screen name="Home" component={TabNavigator} />
        <Screen name="Job" component={WrapLayout(Job)} />
        <Screen name="Apply" component={WrapLayout(Apply)} />
      </Navigator>
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      // unmountonblur ?
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          position: "absolute",
          borderTopWidth: 1,
          borderTopColor: "rgba(0, 0, 0, 0.3)",
          elevation: 0,
          shadowOpacity: 0,
          height: 60 + insets.bottom,
          paddingHorizontal: 10,
          display: "flex",
          alignItems: "center",
          zIndex: 10,
          overflow: "hidden",
          paddingTop: 10,
        },
        tabBarBackground: () => {
          if (Platform.OS === "ios") {
            return (
              <View
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  opacity: 0.6,
                }}
              />
            );
          }

          return (
            <BlurView
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              blurType={"light"}
              blurAmount={5}
              blurRadius={10}
            />
          );
        },
      }}
    >
      <Tab.Screen
        name={"HOME"}
        component={Home}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="home"
                size={24}
                color="#4062f4"
                opacity={focused ? 1 : 0.5}
              />
            );
          },
          tabBarButton: (props) => (
            <TouchableOpacity {...(props as TouchableOpacityProps)} />
          ),
        }}
      />
      <Tab.Screen
        name={"BOOKMARKS"}
        component={Bookmarks}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="bookmark"
                size={24}
                color="#4062f4"
                opacity={focused ? 1 : 0.5}
              />
            );
          },
          tabBarButton: (props) => (
            <TouchableOpacity {...(props as TouchableOpacityProps)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
