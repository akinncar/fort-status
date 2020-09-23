import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

const SearchBar: React.FC = ({ onSubmit }) => {
  const [username, setUsername] = React.useState<string>("");

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.textInput}
        placeholder="Fortnite username"
      />
      <TouchableOpacity
        onPress={() => onSubmit(username)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    marginHorizontal: 18,
    justifyContent: "center",
    maxWidth: 900,
    flexDirection: "row",
    height: 36,
  },

  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    padding: 6,
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#6100FF",
    marginLeft: 8,
    paddingHorizontal: 18,
    justifyContent: "center",
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
  },
});

export default SearchBar;
