
import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {

    const { textStyle, viewStyle } = styles;
    
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>    
    );
}

const styles = {

    viewStyle: {
        backgroundColor: '#0288D1',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        //shadows for ios
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        //shadows for android
        elevation: 8,
        position: 'relative'



    },

    textStyle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        
        
    }
}


export default Header;