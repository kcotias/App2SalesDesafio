import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, Alert, FlatList, AsyncStorage } from 'react-native';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import SelectedItem from '../components/SelectedItem';
import _ from 'lodash';
import Config from '../../config/Config';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';









export default class AreaTrabalho extends Component {
    constructor(props) {
        super(props);

        this.state = {
            area: '',
            counter: 0,
            JobArray: [],
            telaAtual: 0
            

        }
    }
    static navigationOptions = {
        header: null,
    };
    
    ChooseScreen = this.ChooseScreen.bind(this);
    //popItemOut = this.popItemOut.bind(this);

    proximaTela = 'Form';

    _storeData = async () => {
        let telaAtualInt = parseInt(this.state.telaAtual);
        let novaTela = telaAtualInt + 1
        let destino = Config.telas[novaTela].tela;
        try {
            alert(JSON.stringify(this.state.JobArray))
            await AsyncStorage.multiSet([['area', JSON.stringify(this.state.JobArray)], ['tela', JSON.stringify(novaTela)]])
                .then(() => { this.props.navigation.navigate(destino); });
        } catch (error) {
            Alert.alert('Atenção', 'Ocorreu um erro, tente novamente.')
            console.log(error);
        }
    }

    ChooseScreen() {
        this._storeData();
    }

    componentWillMount() {
        this.getTelaAtual()
    }
    
    getTelaAtual = () => { 
        try {
            AsyncStorage.getItem('tela')
                .then((value) => {
                    this.setState({telaAtual: value})
                });
        }
        catch (error) {
            Alert.alert('Atenção', 'Ocorreu um erro, tente novamente.')
            console.log(error);
        }
    }

    render() {

       



        return (
            <View style={styles.container}>
                <Header headerText={"Abrir minha MEI"}/>
                <View
                    style={{
                        flex: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30
                    }}>

                    <View style={{flex:1,  paddingTop: 100}}>
                        <Text style={styles.mainTitle}>Escolha qual área vai atuar:</Text>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'gray', marginBottom: 10, alignSelf: 'center'}}>Áreas</Text>
                        <View style={{ height: 100, flex: 1}}>   
                        <SectionedMultiSelect
                            items={Config.areas} 
                            confirmText={'Confirmar'}
                            selectedText={'Selecionado(s)'}
                            searchPlaceholderText={'Pesquisar Itens...'}
                            colors= {{primary: '#8BC34A'}}
                            uniqueKey='id'
                            subKey='children'
                            selectText='Faça sua escolha...'
                            showDropDowns={true}
                            readOnlyHeadings={true}
                            onSelectedItemsChange={(itemValue) => {
                                
                                this.setState({ area: itemValue })
                                this.setState({ JobArray: itemValue });

                            


                                }}
                            selectedItems={this.state.JobArray}
                            />
                        </View>
                        
                            
                         
                    </View>

                    
                </View>
                <View style={{flex:1, marginBottom: 100}} >
                    <CustomButton Titulo={'Próximo Passo'} Screen={this.ChooseScreen} />
                </View>
               
            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        

        
    },
   
    mainTitle: {
        fontSize: 18,
        marginBottom: 30,
        fontWeight: 'bold',
        color: '#0288D1',
        alignSelf: 'center',
    },

    pickerContainer: {
        borderColor: 'white',
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        marginBottom: 20,
        elevation: 5,
        borderRadius: 5
    }
    
    
    });