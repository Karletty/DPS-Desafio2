import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useContacts } from "../../contexts/ContactsContex";

const Dashboard = () => {
     const navigation = useNavigation();
     const { contacts, saveContacts } = useContacts();

     useEffect(() => {
     }, [contacts]);

     const handleDeleteContact = (contact) => {
          const newContacts = contacts.filter(c => c.name !== contact.name && c.lastname !== contact.lastname && c.phone !== contact.phone);

          saveContacts(newContacts);
     }

     return (<View style={styles.container}>
          <View>
               <View style={styles.titleContainer}>
                    <Text style={styles.title}>Contactos</Text>
               </View>
               {contacts?.length ?
                    <View style={{ marginTop: 20 }}>{contacts.map((contact, i) => (
                         <View key={contact.phone} style={styles.contactContainer}>
                              <View>
                                   <Text style={styles.contactName}>{contact.name} {contact.lastname}</Text>
                                   <Text>{contact.phone}</Text>
                              </View>
                              <View>
                                   <Button style={styles.btnDelete} onPress={() => {
                                        handleDeleteContact(contact);
                                   }}>
                                        <Text style={styles.btnDeleteText}>Eliminar</Text>
                                   </Button>
                              </View>
                         </View>))}</View> :
                    <Text style={styles.text}>No hay contactos registrados</Text>}
          </View>
          <View style={styles.btnContainer}>
               <Button style={styles.btnAdd} onPress={() => {
                    navigation.navigate("AddContact");
               }}><Text style={styles.btnText}>+</Text></Button>
          </View>
     </View>)
}

export { Dashboard }