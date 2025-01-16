import { Text, StyleSheet, View, TextInput } from 'react-native';

const RoundedRedButton = () => {
  return (
    <View style={styles.container}>

      <Text>Result: </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }

});

export default RoundedRedButton;
