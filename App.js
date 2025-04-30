import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container1}>
        <Text style={styles.text}>AMO MINHA MULHER!!💜💜💜💜💜💜</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.container2}>
        <Text style={styles.text}>AMO MINHA MULHER!!💙💙💙💙💙💙</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.container3}>
        <Text style={styles.text}>AMO MINHA MULHER!!💙💙💙💙💙💙</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "bisque",
    alignItems: "center",
    justifyContent: "center",
  },

  container2: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },

  container3: {
    flex: 1,
    backgroundColor: "whir",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "purple",
    fontSize: 50,
    textShadowColor: "orange",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    fontWeight: "bold",
  },
});
