import { useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Register, Dashboard, AddContact } from "../../pages";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider } from "../../contexts/AuthContext";
import { ContactsProvider } from "../../contexts/ContactsContex";

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
     return (
          <AuthProvider><ContactsProvider>
               <NavigationContainer>
                    <Stack.Navigator
                         screenOptions={{
                              headerShown: false
                         }}
                    >
                         <Stack.Screen name="Login" component={Login} />
                         <Stack.Screen name="Register" component={Register} />
                         <Stack.Screen name="Dashboard" component={Dashboard} />
                         <Stack.Screen name="AddContact" component={AddContact} />
                    </Stack.Navigator>
               </NavigationContainer>
          </ContactsProvider></AuthProvider>)
}

export { NavigationStack }