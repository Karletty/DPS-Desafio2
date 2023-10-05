import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Creamos un contexto global
const ContactsContext = createContext();

// Hook para acceder al contexto en otros componentes
export const useContacts = () => {
     return useContext(ContactsContext);
};

// Proveedor del contexto que contiene los datos globales
export const ContactsProvider = ({ children }) => {
     const [contacts, setContacts] = useState([]);

     // Función para cargar los contactos desde AsyncStorage
     const loadContacts = async () => {
          try {
               const storedContacts = await AsyncStorage.getItem('contacts');
               if (storedContacts) {
                    setContacts(JSON.parse(storedContacts));
               }
          } catch (error) {
               console.error('Error al cargar contactos:', error);
          }
     };

     // Función para guardar los contactos en AsyncStorage
     const saveContacts = async (updatedContacts) => {
          try {
               await AsyncStorage.setItem('contacts', JSON.stringify(updatedContacts));
               setContacts(updatedContacts);
          } catch (error) {
               console.error('Error al guardar contactos:', error);
          }
     };

     useEffect(() => {
          loadContacts();
     }, []);

     return (
          <ContactsContext.Provider value={{ contacts, saveContacts }}>
               {children}
          </ContactsContext.Provider>
     );
};
