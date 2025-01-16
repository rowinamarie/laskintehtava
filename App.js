import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>Result: </Text>

      <TextInput
        placeholder='Ensimmäinen luku'
        onChangeText={text => setText(text)}
        value={text} />
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