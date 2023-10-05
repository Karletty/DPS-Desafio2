import React, { useState } from "react";
import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { styles } from "./styles";
import { CheckBox } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/AuthContext";

export function Register({ route }) {
     const { users, saveUsers } = useAuth();
     const navigation = useNavigation();
     const [isSelected, setSelection] = useState(false);
     const [user, setUser] = useState({ name: "", email: "", pass: "", rPass: "" });

     const handleRegister = () => {
          if (user.pass && user.name && user.email && user.rPass && isSelected) {
               if (users.find(u => u.name === user.name || u.email === user.email)) {
                    alert("Este nombre de usuario/correo ya fueron utilizados");
               } else if (user.pass !== user.rPass) {
                    alert("Las contraseñas no coinciden");
               } else {
                    const newUsers = [...users, user];
                    saveUsers(newUsers);
                    navigation.navigate("Dashboard");
               }
          } else {
               alert("Debe ingresar todos los campos y aceptar los términos y condiciones")
          }
     }

     return (
          <>
               <View style={styles.container}>
                    <Text variant="displayMedium" style={styles.title}>Registrarse</Text>
                    <TextInput
                         style={styles.textbox}
                         mode="flat"
                         placeholder="Ingrese su nombre de usuario"
                         onChangeText={(val) => {
                              setUser(prev => ({ ...prev, name: val }))
                         }}
                    />
                    <TextInput
                         keyboardType="email-address"
                         style={styles.textbox}
                         mode="flat"
                         placeholder="Ingrese su email"
                         onChangeText={(val) => {
                              setUser(prev => ({ ...prev, email: val }))
                         }}
                    />
                    <TextInput
                         style={styles.textbox}
                         placeholder="Ingrese su contraseña"
                         secureTextEntry={true}
                         onChangeText={(val) => {
                              setUser(prev => ({ ...prev, pass: val }))
                         }}
                    />
                    <TextInput
                         style={styles.textbox}
                         placeholder="Repita su contraseña"
                         secureTextEntry={true}
                         onChangeText={(val) => {
                              setUser(prev => ({ ...prev, rPass: val }))
                         }}
                    />
                    <View style={styles.checkboxContainer}>
                         <CheckBox
                              checked={isSelected}
                              onPress={() => setSelection(prev => !prev)}
                              title="Acepto los términos y condiciones"
                         />
                    </View>
                    <Button
                         style={styles.button}
                         mode="contained"
                         onPress={handleRegister}>Registrarse</Button>
               </View>
          </>
     );
}
