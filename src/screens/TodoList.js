import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const TodoList = ({ navigation }) => {
  const [todos, setTodos] = useState([
    { id: '1', text: 'Buy groceries' },
    { id: '2', text: 'Walk the dog' }
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => <Text style={styles.todoItem}>{item.text}</Text>}
        keyExtractor={item => item.id}
      />
      <Button title="Add Todo" onPress={() => navigation.navigate('AddTodo', { setTodos })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  todoItem: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

export default TodoList;
