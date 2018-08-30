import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';



const CustomButton = (props) => {
    
    
        
        return (
           
                    <TouchableOpacity style={styles.botao} onPress={props.Screen}>
                            <Text style = {{color: 'white', fontWeight: 'bold', fontSize:20}}>{props.Titulo}</Text>
                    </TouchableOpacity>
              
        );
    
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        
    },
    botao:{
        padding:10,
        //marginBottom: 90,
        height: 55,
        width: 180,
        alignSelf:'center',
        backgroundColor:'#8BC34A', 
        borderRadius:50,
        elevation:8,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.90
    }
    
});
    
export default CustomButton;

