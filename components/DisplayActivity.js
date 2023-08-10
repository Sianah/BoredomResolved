import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const DisplayActivity = ({ activitiesList }) => {
    const [selectedActivity, setSelectedActivity] = useState(null);

    const handleRandomSelection = () => {
        if (activitiesList && activitiesList.length) {
            const randomIndex = Math.floor(Math.random() * activitiesList.length);
            setSelectedActivity(activitiesList[randomIndex]);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="What should I do today?" onPress={handleRandomSelection} />
            {selectedActivity && <Text style={styles.activityText}>{selectedActivity}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,                  // This makes sure the container takes the full height
        justifyContent: 'center', // Align children vertically in the center
        alignItems: 'center'      // Align children horizontally in the center
    },
    activityText: {
        fontSize: 24,             // Increase font size
        fontWeight: 'bold',       // Make it bold
        marginTop: 20,            // Give some space from the button
        textAlign: 'center'      // Center the text if it's multiline
    }
});

export default DisplayActivity;
















