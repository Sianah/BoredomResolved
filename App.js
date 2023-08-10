import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InputActivities from './components/InputActivities';
import DisplayActivity from './components/DisplayActivity';
import { View, Modal, Text } from 'react-native';
import ActivityContext from './ActivityContext';  // <-- Import from the new file

const Tab = createBottomTabNavigator();

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [activitiesList, setActivitiesList] = useState([]);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <NavigationContainer>
      <ActivityContext.Provider value={activitiesList}>
        <Tab.Navigator>
          <Tab.Screen 
            name="Home" 
            component={DisplayActivity} 
            options={{ title: 'Activity Suggestion' }}
          />
          <Tab.Screen 
            name="Add Activities" 
            component={InputActivities} 
            options={{ title: 'Add New Activities' }}
          />
        </Tab.Navigator>

        {modalVisible && (
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={handleCloseModal}
          >
            <View style={{ marginTop: 22 }}>
              <Text>Enter Your Activities</Text>
              <InputActivities onClose={handleCloseModal} setActivitiesList={setActivitiesList} />
            </View>
          </Modal>
        )}
      </ActivityContext.Provider>
    </NavigationContainer>
  );
}

export default App;







