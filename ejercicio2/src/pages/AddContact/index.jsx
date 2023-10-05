import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Text, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useContacts } from "../../contexts/ContactsContex";


const AddContact = () => {
     const navigation = useNavigation();
     const [contact, setContact] = useState({ name: "", lastname: "", phone: "" });
     const { contacts, saveContacts } = useContacts();

     const handleAddContact = () => {
          if (contact.name && contact.lastname && contact.phone) {
               if (contacts.find(c => ((c.name === contact.name && c.lastname === contact.lastname) || contact.phone === c.phone))) {
                    alert("Este contacto ya existe o su teléfono ya se encuentra registrado");
               } else {
                    const newContacts = [...contacts, contact]
                    saveContacts(newContacts);
                    navigation.navigate("Dashboard")
               }
          } else {
               alert("Ingrese todos los datos del contacto");
          }
     }

     return <View style={styles.container}>
          <Text style={styles.title}>Agregar Contacto</Text>
          <TextInput
               style={styles.textbox}
               mode="flat"
               placeholder="Ingrese el nombre"
               onChangeText={(val) => {
                    setContact(prev => ({ ...prev, name: val }))
               }} />
          <TextInput
               style={styles.textbox}
               mode="flat"
               placeholder="Ingrese el apellido"
               onChangeText={(val) => {
                    setContact(prev => ({ ...prev, lastname: val }))
               }} />
          <TextInput
               style={styles.textbox}
               mode="flat"
               keyboardType="phone-pad"
               placeholder="Ingrese el teléfono"
               onChangeText={(val) => {
                    setContact(prev => ({ ...prev, phone: val }))
               }} />
          <Button
               style={styles.button}
               mode="contained"
               onPress={handleAddContact}>Agregar contacto</Button>
     </View>
}

export { AddContact }