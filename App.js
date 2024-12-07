import { Provider as PaperProvider } from "react-native-paper";
import React from "react";
import AppNavigator from "./app.navigator";

export default function App() {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}
