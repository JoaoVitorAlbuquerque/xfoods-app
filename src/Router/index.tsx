import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../Screens/Home";
import Order from "../Screens/Order";
import Settings from "../Screens/Settings";
import { Container } from "./styles";

const Tab = createBottomTabNavigator();

export function Router() {
  return (
    <Container>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Tab.Screen name="Pedidos" component={Order} />
          <Tab.Screen name="Meu Perfil" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </Container>
  );
}
