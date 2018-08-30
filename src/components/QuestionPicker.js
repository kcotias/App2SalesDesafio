import React from 'react';
import { View, Picker, Text, StyleSheet } from 'react-native';

const QuestionPicker = (props) => {
    return (
        <View style={{margin: 20, alignItems: 'center', justifyContent: 'center',}}>
            <Text style={styles.inputHeader}>{props.Title}</Text>
            <View style={styles.pickerContainer}>
            
                <Picker
                    style={styles.picker}
                    onValueChange={props.ValueChange}
                    mode={'dropdown'}
                    selectedValue={props.Value}
                >
                    {props.PickerReturn}
                </Picker>


            </View>
        </View>    
    );
}

const styles = StyleSheet.create({

    pickerContainer: {
        borderColor: 'white',
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        elevation: 5,
        borderRadius: 5,
        width: 120
        
    },

    
    
    inputHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        alignSelf: 'center',
        
    }, 

    picker: {
        height: 40,
        width: 120,
        color: '#0288D1',
    }
})

export default QuestionPicker;

