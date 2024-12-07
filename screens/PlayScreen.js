import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Touchable,
  FlatList,
  TouchableOpacity,
} from "react-native";

const PlayScreen = () => {
  const [grid, setGrid] = useState(Array(30).fill(""));
  const [currentRow, setCurrentRow] = useState(0);
  const [currentInput, setCurrentInput] = useState([]);

  const chosenWord = null;

  const countOccurrences = (arr, val) => {
    arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  };

  const selectGoalWord = () => {
    let wordList = [
      "HELLO, PLANT, BEGIN, START, THEME, WORDS, JAILS, TRUCK, REACH, AGILE, PLUCK, MIMES, TREAT, BLEAK",
    ];
    let rand = Math.floor(Math.random() * wordList.length);
    chosenWord = wordList[rand];
    console.log(chosenWord);
  };

  //making the grid
  const data = Array.from({ length: 30 }, (_, i) => i + 1); // 30 items for the grid

  //making the keyboard
  const qwertyLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const asdfLetters = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const zxcvLetters = ["z", "x", "c", "v", "b", "n", "m"];

  const handleKeyPress = (key) => {
    if (currentInput.length < 5) {
      const updatedInput = [...currentInput, key];
      setCurrentInput(updatedInput);

      const updatedGrid = [...grid];
      updatedGrid[currentRow * 5 + updatedInput.length - 1] = key.toUpperCase();
      setGrid(updatedGrid);
    }
  };

  const handleEnterPress = (key) => {
    console.log(`ENTER KEY PRESSED: ${key}`);
    if (currentInput.length === 5 && currentRow < 6) {
      console.log(`Entered Word: ${currentInput.join("")}`);
      setCurrentRow(currentRow + 1);
      setCurrentInput([]);
    } else {
      console.log("Word is incomplete");
    }

    //check if that word exists.

    // loop through all selected keys, and mark them as used.
    // even if letter is used, it can still be used again. (potentially add a setting for hard mode where you can't do this)
    // Based on if letter selected is in goal word, we want to set color of that letter accordingly
    // also want to fill in the row of the grid with the users inputted word.
    // if letter is in right spot with the same as the goal word, set that letter to green
    // if that letter is in the word but not in the right spot, we want to set that letter to yellow
    // if that letter is not in the word at all we want to set that letter to be blacked out.
  };

  const handleDeletePress = (key) => {
    console.log(`DELETE KEY PRESSED: ${key}`);

    if (currentInput.length > 0) {
      const updatedInput = currentInput.slice(0, -1);
      setCurrentInput(updatedInput);

      const updatedGrid = [...grid];
      updatedGrid[currentRow * 5 + updatedInput.length] = "";
      setGrid(updatedGrid);
    }

    //pop the last element in the selected keys list
  };

  const renderKey = ({ item }) => (
    <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(item)}>
      <Text style={styles.keyText}>{item.toUpperCase()}</Text>
    </TouchableOpacity>
  );

  const renderCell = ({ item }) => (
    <View style={styles.cell}>
      <Text style={styles.cellText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.guessesContainer}>
        {/* CREATING GUESSING GRID */}
        <FlatList
          data={grid}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderCell}
          numColumns={5}
          contentContainerStyle={styles.grid}
        />
      </View>

      {/*CREATING KEYBOARD */}

      {/* QWERTY ROW */}
      <View style={styles.keyboardContainer}>
        <FlatList
          data={qwertyLetters}
          keyExtractor={(item) => item}
          renderItem={renderKey}
          horizontal
          contentContainerStyle={styles.row}
        />

        {/*ASDF ROW*/}
        <FlatList
          data={asdfLetters}
          keyExtractor={(item) => item}
          renderItem={renderKey}
          horizontal
          contentContainerStyle={styles.row}
        />

        {/*ZXCV ROW W/ Enter & Delete */}
        {/* ENTER KEY */}
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.key, styles.specialKey]}
            onPress={() => handleEnterPress()}
          >
            <Text style={styles.keyText}>ENTER</Text>
          </TouchableOpacity>

          {/* ZXCV LETTERS */}
          {zxcvLetters.map((letter) => (
            <TouchableOpacity
              key={letter}
              style={styles.key}
              onPress={() => handleKeyPress(letter)}
            >
              <Text style={styles.keyText}>{letter.toUpperCase()}</Text>
            </TouchableOpacity>
          ))}
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.key, styles.specialKey]}
              onPress={() => handleDeletePress("delete")}
            >
              <Text style={styles.keyText}>⌫</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#282828",
  },
  guessesContainer: {
    flex: "3",
    height: 530,
    alignItems: "center",
    justifyContent: "center",
  },

  cell: {
    top: 70,
    width: 70,
    height: 70,
    backgroundColor: "#b3b3b3",
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  cellText: {
    fontsize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  keyboardContainer: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 100,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  key: {
    height: 45,
    width: 35,
    margin: 2,
    backgroundColor: "#b3b3b3",
    borderWidth: 0.5,
    borderColor: "#000",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  keyIsSelected: {},
  keyIsUsedBLACK: {},
  keyIsUsedGREEN: {},
  keyIsUsedYELLOW: {},
  specialKey: {
    width: 70,
  },
  keyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
