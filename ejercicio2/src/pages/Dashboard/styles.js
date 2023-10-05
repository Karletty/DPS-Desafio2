import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: "space-between"
     },
     titleContainer: {
          backgroundColor: "#0d6efd",
          paddingVertical: 25,
          borderBottomEndRadius: 40,
          borderBottomStartRadius: 40,
     },
     title: {
          fontSize: 30,
          textAlign: "center",
          color: "#fff"
     },
     text: {
          marginTop: 40,
          textAlign: "center"
     },
     btnContainer: {
          padding: 20
     },
     btnAdd: {
          borderRadius: 50,
          backgroundColor: "#0d6efd",
          width: 40,
          height: 60,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "flex-end",
     },
     btnText: {
          color: "#fff",
          fontSize: 20,
     },
     contactContainer: {
          marginBottom: 15,
          borderBottomWidth: 1,
          borderBottomColor: "#0d6efd",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 10
     },
     contactName: {
          fontSize: 18,
          fontWeight: "bold"
     },
     btnDelete: {
          paddingVertical: 0,
          paddingHorizontal: 20,
          borderRadius: 15,
          backgroundColor: "#dc3545"
     },
     btnDeleteText: {
          color: "#fff",
          fontWeight: "bold"
     }
});