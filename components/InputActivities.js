import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const InputActivities = ({ navigation }) => {
  const [activity, setActivity] = useState('');
  const [activities, setActivities] = useState([]);

  const handleAddActivity = () => {
    setActivities(prev => [...prev, activity]);
    setActivity('');
  };

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('userActivities', JSON.stringify(activities));
      navigation.navigate('DisplayActivity');
    } catch (error) {
      console.error('Error saving activities to storage:', error);
    }
  };
  

  return (
    <View>
      <TextInput
        value={activity}
        placeholder="Enter an activity"
        onChangeText={text => setActivity(text)}
      />
      <Button title="Add Activity" onPress={handleAddActivity} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default InputActivities;