import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [text, setText] = useState("");


  const handlePress = () => {
    Alert.alert("You typed: " + text);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>Result: </Text>

      <TextInput
        placeholder='Ensimmäinen luku'
        onChangeText={text => setText(text)}
        value={text} />

      <Button onPress={handlePress} title="Press me" />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});