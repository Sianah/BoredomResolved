import React, { useState, createContext, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InputActivities from './components/InputActivities';
import DisplayActivity from './components/DisplayActivity';
import { View, Modal, Text } from 'react-native';

export const ActivityContext = createContext();

const Tab = createBottomTabNavigator();

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [activitiesList, setActivitiesList] = useState([]);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <NavigationContainer>
      <ActivityContext.Provider value={{ activitiesList, setActivitiesList }}>
        <Tab.Navigator>
          <Tab.Screen 
            name="Home" 
            children={(props) => {
              return (
                <>
                  <DisplayActivity activitiesList={activitiesList} setActivitiesList={setActivitiesList} />
                  
                  {modalVisible && (
                    <Modal
                      animationType="slide"
                      transparent={false}
                      visible={modalVisible}
                      onRequestClose={handleCloseModal}
                    >
                      <View style={{ marginTop: 22 }}>
                        <Text>Enter Your Activities</Text>
                        <InputActivities onClose={handleCloseModal} />
                      </View>
                    </Modal>
                  )}
                </>
              )
            }}
            options={{ title: 'Activity Suggestion' }}
          />
          <Tab.Screen 
            name="Add Activities" 
            component={InputActivities} 
            options={{ title: 'Add New Activities' }}
          />
        </Tab.Navigator>
      </ActivityContext.Provider>
    </NavigationContainer>
  );
}

export default App;




