import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from "./pages/Profile";

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitleStyle: { alignSelf: "center" },
            title: "FortStatus",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
