import { NavigationContainer } from "@react-navigation/native";
import {
    createStackNavigator,
    CardStyleInterpolators,
  } from "@react-navigation/stack";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";

export const Routes = () => {
    const { Navigator, Screen } = createStackNavigator()

    return (
        <NavigationContainer>
            <Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="Home"
    >
        <Screen name="Home" component={Home} />
        <Screen name="Profile" component={Profile} />
    </Navigator>

        </NavigationContainer>
    )
}