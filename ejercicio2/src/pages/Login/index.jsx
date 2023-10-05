import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Text, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/AuthContext";

export const Login = () => {
     const { users } = useAuth();
     const navigation = useNavigation();
     const [user, setUser] = useState({ user: "", pass: "" });

     const handleLogin = () => {
          if (user.pass && user.user) {
               if (users.find(u => (u.name === user.user || u.email === user.user) && u.password === user.pass)) {
                    navigation.navigate("Dashboard");
               } else {
                    alert("Credenciales incorrectas");
               }
          } else {
               alert("Ingrese un usuario y contraseña válidos");
          }
     }

     return (
          <>
               <View style={styles.container}>
                    <Text variant="displayMedium">Login</Text>
                    <TextInput
                         style={styles.textbox}
                         mode="flat"
                         keyboardType="email-address"
                         placeholder="Ingrese su email o nombre de usuario"
                         onChangeText={(val) => {
                              setUser(prev => ({ ...prev, user: val }))
                         }} />
                    <TextInput
                         style={styles.textbox}
                         placeholder="Ingrese su contraseña"
                         secureTextEntry={true}
                         onChangeText={(val) => {
                              setUser(prev => ({ ...prev, pass: val }))
                         }} />
                    <Button
                         style={styles.button}
                         mode="contained"
                         onPress={handleLogin}>Login</Button>
                    <View style={styles.linkContainer}>
                         <Text style={styles.text}>¿No tienes cuenta?</Text>
                         <Button onPress={() => {
                              navigation.navigate("Register");
                         }} style={styles.linkBtn}>Registrarse</Button>
                    </View>
               </View>
          </>
     );
}
