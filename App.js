import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InputActivities from './components/InputActivities';
import DisplayActivity from './components/DisplayActivity';
import { View, Modal, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <NavigationContainer>
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
                    <View>
                        <Text>Enter Your Activities</Text>
                        <InputActivities onClose={handleCloseModal} />
                    </View>
                </View>
            </Modal>
        )}
    </NavigationContainer>
);
}

export default App;




