import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Explorar from "../pages/Explorar";
import Filter from "../pages/Filter";

const routes: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Explorar} />
      <Stack.Screen name="Filter" component={Filter} />
    </Stack.Navigator>
  );
};

export default routes;
