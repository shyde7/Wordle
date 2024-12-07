import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Touchable,
} from "react-native";

const wordleImg = require("../assets/wordleLogo.png");

const HomeScreen = () => {
  const navigation = useNavigation();

  const playButton = () => {
    //just move to new page for now
    navigation.navigate("PlayScreen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={wordleImg} style={styles.wordleImg} />
        <Text style={styles.text_header}>Welcome to Wordle!</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.playButton} onPress={playButton}>
            <Text style={styles.buttonText}>Play Game!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.buttonText}>Sign Up!</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Project made by Sean Hyde.</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
  },
  header: {
    flex: 1,
    padding: 20,
    paddingTop: 125,
    alignItems: "center",
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  wordleImg: {
    height: 100,
    width: 100,
  },
  buttonsContainer: {
    top: 200,
    height: 500,
    width: 450,
    alignItems: "center",
    marginBottom: 10,
  },
  playButton: {
    width: 300,
    height: 50,
    borderRadius: 15,
    margin: 20,
    backgroundColor: "#4caf50",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {
    width: 300,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#3a4f63",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  footer: {
    top: 100,
  },
  footerText: {
    color: "#B3B3b3",
  },
});
