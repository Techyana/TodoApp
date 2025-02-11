import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoList from './screens/TodoList';
import AddTodo from './screens/AddTodo';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="AddTodo" component={AddTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
