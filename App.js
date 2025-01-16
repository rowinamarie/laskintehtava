import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {

  const [text, setText] = useState("");

  const Painike = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Result: </Text>

      <View style={styles.textInputs}>
        <TextInput
          placeholder='Ensimmäinen luku'
          onChangeText={text => setText(text)}
          value={text} style={styles.input} />

        <TextInput
          placeholder='Toinen luku'
          onChangeText={text => setText(text)}
          value={text} style={styles.input} />
      </View>

      <View style={styles.buttons}>
        <Painike title="+" backgroundColor="#007bff" />
        <Painike title="-" backgroundColor="#007bff" />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputs: {
    marginBottom: 20,
  },
  input: {
    borderColoer: '#000',
    borderWidth: 0.5,
    marginBottom: 10,
    padding: 8,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '25%',
  },
  buttonContainer: {
    backgroundColor: '#009688',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  buttonText: {
    color: '#fff'
  }
});