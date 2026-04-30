import {StatusBar} from 'expo-status-bar';
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";


export default function App() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function verificarLogin() {
    if (usuario === "" || senha === "") {
      alert("Preencha todos os campos");
    } else if (usuario === "admin" && senha === "1234") {
      alert("Login realizado com sucesso!");
    } else {
      alert("Usuário ou senha inválidos.");
    }
  }

  return (
    <ImageBackground
      source={{ uri: "https://img.freepik.com/fotos-gratis/formas-onduladas-em-camadas-abstratas-em-escala-de-cinza_779267-3587.jpg?semt=ais_hybrid&w=740&q=80" }}
      style={styles.fundo}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>LOGIN</Text>

        <TextInput
          style={styles.input}
          placeholder="Usuário"
          onChangeText={setUsuario}
          value={usuario}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={setSenha}
          value={senha}
        />

        <TouchableOpacity style={styles.button} onPress={verificarLogin}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "50%",
    opacity: 0.8,
    backgroundColor: "grey",
    padding: 25,
    borderRadius: 15,
    alignItems: "center",
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold", 
    marginBottom: 15, 
    color: "#333",
  },

    input: {
    width: "100%",
    height: 45,
    borderColor: "#999",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },

  button: {
    width: "100%",
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
