import React, { useState, useEffect } from 'react';
import { View, Button, Modal, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const DisplayActivity = () => {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState('');

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const storedActivities = await AsyncStorage.getItem('userActivities');
        if (storedActivities) setActivities(JSON.parse(storedActivities));
      } catch (error) {
        console.error('Error retrieving activities from storage:', error);
      }
    };
    

    fetchActivities();
  }, []);

  const handleRandomActivity = () => {
    const randomIndex = Math.floor(Math.random() * activities.length);
    setSelectedActivity(activities[randomIndex]);
  };

  return (
    <View>
      <Button title="What should I do today?" onPress={handleRandomActivity} />
      {selectedActivity && <Text>{selectedActivity}</Text>}
    </View>
  );
};

export default DisplayActivity;
