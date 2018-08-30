/**
 * Feito por Kaian Cotias :)
 * 30/08/2018
 */

import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Alert, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import CustomButton from '../components/CustomButton';
import Config from '../../config/Config';



export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    
    ChooseScreen = this.ChooseScreen.bind(this);

    proximaTela = 'AreaTrabalho';

    
    
    _storeData = async () => {
        let telaAtual = 0;
        let novaTela = telaAtual + 1
        let destino = Config.telas[novaTela].tela;
        try {
            await AsyncStorage.setItem('tela', JSON.stringify(novaTela))
                .then(() => { this.props.navigation.navigate(destino); });
        } catch (error) {
            Alert.alert(error)
            console.log(error);
        }
    }

    ChooseScreen() {
        this._storeData();
    }

    render() {
        
        return (
            <View style={styles.container}> 
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 100
                    }}>
                    <Text style={styles.mainTitle}>CLIQUE</Text>
                    <Text style={styles.mainTitle}>PARA ABRIR</Text>
                    <Text style={styles.mainTitle}>SUA MEI</Text>
                </View>
                <View style={{flex:1}} >
                    <CustomButton Titulo={'Iniciar!'} Screen={this.ChooseScreen}/>
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#0288D1'
        
    },
    
    mainTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white'
    }
    
    
    });

