import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";

import Feather from "@expo/vector-icons/Feather";

export default function App() {
  const changeText = () => {
    console.log("foi digitado algo no textInput");
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("./src/assets/images/be7473c8c0465c7fc7662fbefee519c4.jpg")}
      resizeMode="cover"
    >
      <Feather name="user" size={24} color="black" />

      <TextInput
        style={styles.input}
        placeholder="Digite seu Email"
        secureTextEntry={true}
        placeholderTextColor="#00FFFF"
        inputMode={"text"}
        autoCapitalize="characters"
        multiline={true}
        onChangeText={changeText}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua Senha!"
        secureTextEntry={true}
        placeholderTextColor="#00FFFF"
        inputMode={"numeric"}
        autoCapitalize="characters"
        multiline={true}
        onChangeText={changeText}
      />

      {/*<Button
        title="Enviar"
        color="#ff0000"
        onPress={() => alert("você apertou o botão")}
      />
      */}

      <TouchableOpacity
        style={styles.btn}
        onPress={() => alert("Login feito com sucesso!")}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 10,
    color: "#00FFFF",
  },
  input: {
    width: 300,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#00FFFF",
    color: "#00FFFF",
  },
  image: {
    width: 150,
    height: 150,
  },
  btn: {
    width: 100,
    padding: 10,
    backgroundColor: "transparent",
    color: "#000",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#00FFFF",
    color: "#00FFFF",
  },
});
