import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InputActivities = ({ onClose }) => {
    const [activity, setActivity] = useState('');  // The current activity being typed in
    const [activitiesList, setActivitiesList] = useState([]);  // All the added activities

    const navigation = useNavigation();
    
    const handleAddActivity = () => {
        if (activity) {
            setActivitiesList([...activitiesList, activity]);
            setActivity('');  // Clear the input field
        }
    };

    const handleRemoveActivity = (index) => {
        const newActivities = [...activitiesList];
        newActivities.splice(index, 1);
        setActivitiesList(newActivities);
    };

    const handleActivitySubmission = () => {
        // Here, you'd typically save or process the activities.
        // For simplicity, we're just setting the state and moving on.

        onClose();  // Close the modal if it's open from the app component

        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                value={activity} 
                onChangeText={setActivity} 
                placeholder="Enter an activity" 
            />
            <Button title="Add Activity" onPress={handleAddActivity} />

            <FlatList 
                data={activitiesList}
                renderItem={({ item, index }) => (
                    <View style={styles.activityItem}>
                        <Text>{item}</Text>
                        <TouchableOpacity onPress={() => handleRemoveActivity(index)}>
                            <Text style={styles.removeBtn}>X</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />

            <Button title="Submit" onPress={handleActivitySubmission} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    input: {
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    },
    activityItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#e5e5e5',
        borderRadius: 20,
        marginTop: 10
    },
    removeBtn: {
        color: 'red',
        fontSize: 18
    }
});

export default InputActivities;




