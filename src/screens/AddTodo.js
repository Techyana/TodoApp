import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTodo = ({ navigation, route }) => {
  const { setTodos } = route.params;
  const [text, setText] = useState('');

  const addTodo = () => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text }
    ]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="New Todo"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={addTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    width: '80%'
  }
});

export default AddTodo;
