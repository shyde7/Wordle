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
  const slideAnim = useRef(new Animated.Value(0)).current;


  const playButton = () => {
    Animated.timing(slideAnim, {
      toValue: -500, 
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate("PlayScreen");
    });
  };
  return (
    <Animated.View style={[styles.container, { transform: [{ translateX: slideAnim }] }]}>
      <View style={styles.header}>
        <Image source={require("../assets/wordleLogo.png")} style={styles.wordleImg} />
        <Text style={styles.text_header}>Welcome to Wordle!</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
            <Text style={styles.buttonText}>Play Game!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

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
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});

export default HomeScreen;