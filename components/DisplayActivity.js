import React, { useState, useContext } from 'react';  // <-- Ensure useContext is imported
import { View, Button, Modal, Text } from 'react-native';
import ActivityContext from '../ActivityContext';  // <-- Adjusted path

const DisplayActivity = () => {
  const activitiesList = useContext(ActivityContext);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleRandomSelection = () => {
    if (activitiesList && activitiesList.length) {
      const randomIndex = Math.floor(Math.random() * activitiesList.length);
      setSelectedActivity(activitiesList[randomIndex]);
    }
  };

  return (
    <View>
      <Button title="What should I do today?" onPress={handleRandomSelection} />
      {selectedActivity && <Text>{selectedActivity}</Text>}
    </View>
  );
}

export default DisplayActivity;







