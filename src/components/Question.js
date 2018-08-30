import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Question = (props) => {
    return (
        <View style={{margin: 20}}>
            <Text style={styles.inputHeader}>{props.Title}</Text>
            <TextInput
                style={styles.inputs}
                onChangeText={props.ChangeText}
                value={props.Value}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    inputHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingRight: 200,
        color: 'gray',
        marginBottom: 5
        
    }, 

    inputs: {
        height: 40,
        width: 280,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#f0f0f0',
        elevation: 5,
        borderRadius: 5
        
    }
});
export default Question;