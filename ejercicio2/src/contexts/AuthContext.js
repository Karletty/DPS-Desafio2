import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Creamos un contexto global
const AuthContext = createContext();

// Hook para acceder al contexto en otros componentes
export const useAuth = () => {
     return useContext(AuthContext);
};

// Proveedor del contexto que contiene los datos globales
export const AuthProvider = ({ children }) => {
     const [users, setUsers] = useState([]);

     // Función para cargar los usuarios desde AsyncStorage
     const loadUsers = async () => {
          try {
               const storedUsers = await AsyncStorage.getItem('users');
               if (storedUsers) {
                    setUsers(JSON.parse(storedUsers));
               }
          } catch (error) {
               console.error('Error al cargar usuarios:', error);
          }
     };

     // Función para guardar los usuarios en AsyncStorage
     const saveUsers = async (updatedUsers) => {
          try {
               await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
               setUsers(updatedUsers);
          } catch (error) {
               console.error('Error al guardar usuarios:', error);
          }
     };

     useEffect(() => {
          loadUsers();
     }, []);

     return (
          <AuthContext.Provider value={{ users, saveUsers }}>
               {children}
          </AuthContext.Provider>
     );
};
