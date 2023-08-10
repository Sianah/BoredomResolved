import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityContext } from '../App';

const InputActivities = ({ onClose }) => {
    const [activity, setActivity] = useState('');
    const { activities, setActivities } = useContext(ActivityContext);
    const navigation = useNavigation();

    useEffect(() => {
        const loadActivities = async () => {
            try {
                const storedActivities = await AsyncStorage.getItem('activities');
                if (storedActivities) {
                    setActivities(JSON.parse(storedActivities));
                }
            } catch (error) {
                console.error("Failed to load activities", error);
            }
        };
        loadActivities();
    }, [setActivities]);

    const handleAddActivity = () => {
        if (activity) {
            const newActivitiesList = [...activities, activity];
            setActivities(newActivitiesList);
            setActivity('');
            storeActivities(newActivitiesList);
        }
    };

    const handleRemoveActivity = (index) => {
        const newActivities = [...activities];
        newActivities.splice(index, 1);
        setActivities(newActivities);
        storeActivities(newActivities);
    };

    const handleActivitySubmission = () => {
        if(onClose) {
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
                data={activities}
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








