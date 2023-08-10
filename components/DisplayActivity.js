import React, { useState, useContext } from 'react';
import { View, Button, Text } from 'react-native';
import { ActivityContext } from '../App';

const DisplayActivity = () => {
    const { activities } = useContext(ActivityContext);
    const [selectedActivity, setSelectedActivity] = useState(null);

    const handleRandomSelection = () => {
        if (activities && activities.length) {
            const randomIndex = Math.floor(Math.random() * activities.length);
            setSelectedActivity(activities[randomIndex]);
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













