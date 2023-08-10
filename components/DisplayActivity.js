import React, { useState, useContext } from 'react';
import { View, Button, Text } from 'react-native';


const DisplayActivity = ({ activitiesList, setActivitiesList }) => {
    
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















