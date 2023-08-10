import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
            <View style={styles.box}>
                <TouchableOpacity style={styles.button} onPress={handleRandomSelection}>
                    <Text style={styles.buttonText}>What should I do today?</Text>
                </TouchableOpacity>
                {selectedActivity ? (
                    <Text style={styles.activityText}>{selectedActivity}</Text>
                ) : (
                    <Text style={styles.instructionText}>Press the button to get a suggestion</Text>
                )}
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F6F6F9',
    },
    instructionText: {
        fontSize: 18,
        color: '#777',
        marginTop: 20,
        textAlign: 'center'
    },
    activityText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 25,
        backgroundColor: '#007BFF',
        borderRadius: 30,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600',
    },
    box: {
        padding: 20,
        borderWidth: 2,
        borderColor: '#007BFF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    
});

export default DisplayActivity;


















