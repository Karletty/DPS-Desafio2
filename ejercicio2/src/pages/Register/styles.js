import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
     },
     title: {
          fontSize: 40,
          fontWeight: "bold"
     },
     textbox: {
          width: '90%',
          marginTop: '3%'
     },
     button: {
          marginTop: '10%',
          width: '85%',
          backgroundColor: "#0d6efd"
     },
     linkContainer: {
          marginTop: '5%',
          display: "flex",
          flexDirection: "row",
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
     },
     text: {
          textAlign: 'left',
     },
     linkBtn: {
          margin: 0,
          padding: 0,
     },
     checkboxContainer: {
          flexDirection: 'row',
          marginBottom: 20,
     },
     checkbox: {
          alignSelf: 'center',
     },
     label: {
          margin: 8,
     },
});