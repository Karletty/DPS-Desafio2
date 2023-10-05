import { NavigationStack } from "./src/components"
import { StatusBar } from "react-native"

export default function App() {
     return (
          <>
               <StatusBar style="auto"></StatusBar>
               <NavigationStack />
          </>
     );
}