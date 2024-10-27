import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../Screens/Home";
import Order from "../Screens/Order";
// import Settings from "../Screens/Settings";
import { Container } from "./styles";

const Tab = createBottomTabNavigator();

export function Router() {
  return (
    <Container>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: string | any;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline'; // ícone quando selecionado e quando não
              } else if (route.name === 'Pedidos') {
                iconName = focused
                  ? 'newspaper'
                  : 'newspaper-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#D73035',
          })}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false, }}
          />
          <Tab.Screen name="Pedidos" component={Order} options={{ headerStyle: { backgroundColor: '#fafafa' } }} />
          {/* <Tab.Screen name="Meu Perfil" component={Settings} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </Container>
  );
}
