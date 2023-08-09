import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputActivities from './components/InputActivities';
import DisplayActivity from './components/DisplayActivity';
import { View, Button, Modal, Text } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DisplayActivity">
        <Stack.Screen 
          name="DisplayActivity" 
          component={DisplayActivity} 
          options={{ title: 'Activity Suggestion' }}
        />
      </Stack.Navigator>

      {modalVisible && (
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Enter Your Activities</Text>
              <InputActivities />

              <Button
                title="Close"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </Modal>
      )}
    </NavigationContainer>
  );
}

export default App;


