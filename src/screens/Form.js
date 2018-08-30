import React, { Component } from 'react';
import { View, Picker, StyleSheet, AsyncStorage, Text } from 'react-native';
import Config from '../../config/Config';
import Question from '../components/Question';
import QuestionPicker from '../components/QuestionPicker';
import Header from '../components/Header'
import CustomButton from '../components/CustomButton'

const myArray = [];
export default class Form extends Component{
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            answers: [],
            estado: '',
            orgao: '',
            rg: '',
            email: '',
            telaAtual: 0

            



        }
    }

    static navigationOptions = {
        header: null,
        
    };
    
    ChooseScreen = this.ChooseScreen.bind(this);
    createState = this.createState.bind(this);

    proximaTela = 'Form2';

    _storeData = async () => {
        let telaAtualInt = parseInt(this.state.telaAtual);
        let novaTela = telaAtualInt + 1
        let destino = Config.telas[novaTela].tela;
        try {
            await AsyncStorage.multiSet([['rg', this.state.rg], ['orgao', this.state.orgao], ['estado', this.state.estado], ['email', this.state.email], ['tela', JSON.stringify(novaTela)]])
                .then(() => { this.props.navigation.navigate(destino); });
        } catch (error) {
            Alert.alert('Atenção', 'Ocorreu um erro, tente novamente.')
            console.log(error);
        }
    }
    
    ChooseScreen() {

        this._storeData();
        
    }

    createState(name, value) {
        let obj = {};
        obj[name] = value
        this.setState(obj);
        return obj[name];
    }

    pushArray(name, value) {
        let obj = {};
        obj[name] = value
        myArray.push(obj);
        
        return obj[name];
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

        const perguntas = Config.perguntas.map((item, index) => {
            let nomeComponent = item.title;
            if (item.kind === 'input') {
                return (
                    <Question
                        key={item.title}
                        Title={item.title}
                        ChangeText={(text) => {
                            this.createState(item.key, text);


                            
                    }} />
                );
            }
            else if (item.kind === 'picker') {
                let pickerKind = ''
                let status = '';

                if (item.key === 'orgao') {
                    status = this.state.orgao;
                    pickerKind = Config.orgaos;

                } else if (item.key === 'estado') {
                    status = this.state.estado;
                    pickerKind = Config.estados;
                }

                return (
                    <QuestionPicker
                        PickerReturn={pickerKind.map((item, index) => {
                            return (
                              <Picker.Item label={item.key} value={item.key} key={index}/>  
                            );
                        })}
                        key={item.title}
                        Title={item.title}
                        Value={status}
                        ValueChange={(text, textIndex) => {
                            
                            this.createState(item.key, text);
                            //this.pushArray(item., text);
                                
                                
                    } } />
                );
            }
        })

        return (
            <View style={styles.container}>
                <Header headerText={'Abrir minha MEI'}/>
                <View
                    style={{
                        flex: 2,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={styles.mainTitle}>Preencha seus dados:</Text>

                    {perguntas}
                </View>    

                <View style={{flex:1, alignItems: 'center', justifyContent: 'center',}} >
                    <CustomButton Titulo={'Próximo'} Screen={this.ChooseScreen}/>
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
        color: '#0288D1',
        marginHorizontal: 10,
        marginTop: 60,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    
    });