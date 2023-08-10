import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text, TouchableOpacity, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';  // Make sure to import this
import { ActivityContext } from '../App';

const InputActivities = ({ onClose }) => {
    const [activity, setActivity] = useState('');
    const { activitiesList, setActivitiesList } = useContext(ActivityContext);
    const navigation = useNavigation();  // Use this hook

    useEffect(() => {
        const loadActivities = async () => {
            try {
                const storedActivities = await AsyncStorage.getItem('activities');
                if (storedActivities) {
                    setActivitiesList(JSON.parse(storedActivities));
                }
            } catch (error) {
                console.error("Failed to load activities", error);
            }
        };
        loadActivities();
    }, [setActivitiesList]);

    const handleAddActivity = () => {
        if (activity) {
            const newActivitiesList = [...activitiesList, activity];
            setActivitiesList(newActivitiesList);
            setActivity('');
            storeActivities(newActivitiesList);
            Keyboard.dismiss();
        }
    };

    const handleRemoveActivity = (index) => {
        const newActivities = [...activitiesList];
        newActivities.splice(index, 1);
        setActivitiesList(newActivities);
        storeActivities(newActivities);
    };

    const storeActivities = async (activities) => {
        try {
            await AsyncStorage.setItem('activities', JSON.stringify(activities));
        } catch (error) {
            console.error("Failed to save activities", error);
        }
    };

    const handleSubmission = () => {
        if (typeof onClose === 'function') {
            onClose();
        }
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
            <Button title="Submit" onPress={handleSubmission} />
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










