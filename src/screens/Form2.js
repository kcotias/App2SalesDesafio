import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, AsyncStorage } from 'react-native';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import { CheckBox } from 'react-native-elements';
import Config from '../../config/Config';



export default class Form2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            porta: false,
            televendas: false,
            maquina: false,
            internet: false,
            local: false,
            correio: false,
            foraLoja: false,
            actArray: [],
            telaAtual: 0



        }
    }
    static navigationOptions = {
        header: null,
    };
    
    ChooseScreen = this.ChooseScreen.bind(this);

    proximaTela = 'HomeScreen';

    _storeData = async () => {

        let telaAtualInt = parseInt(this.state.telaAtual);
        let novaTela = telaAtualInt + 1
        let destino = Config.telas[novaTela].tela;

        if (this.state.porta === true) {
            this.state.actArray.push({key: 'Porta-a-Porta'})
        }
        if (this.state.televendas === true) {
            this.state.actArray.push({key: 'Televendas'})
        }
        if (this.state.maquina === true) {
            this.state.actArray.push({key: 'Máquinas Automáticas'})
        }
        if (this.state.internet === true) {
            this.state.actArray.push({key: 'Internet'})
        }
        if (this.state.local === true) {
            this.state.actArray.push({key: 'Local fisico'})
        }
        if (this.state.correio === true) {
            this.state.actArray.push({key: 'Correios'})
        }
        if (this.state.foraLoja === true) {
            this.state.actArray.push({key: 'Em local fisico fora da loja'})
        }
        
        try {
            await AsyncStorage.multiSet([['Atuação', JSON.stringify(this.state.actArray)], ['tela', JSON.stringify(novaTela)]])
                .then(() => { this.props.navigation.navigate(destino); });
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }
    
    ChooseScreen() {

        this._storeData();
        
    }


    _renderItem(item) {
        console.log(item.item);

        var key = item.item.key
        var val = !item.item.status
        
        return (
            <CheckBox
                checkedColor={'#8BC34A'}
                containerStyle={styles.checkboxContainer}
                title={item.item.title}
                checkedIcon={item.item.icon}
                uncheckedIcon={item.item.icon}
                checked={item.item.status}
                onPress={() => {

                    
                        
                        var obj  = {}
                        obj[key] = val
                        this.setState(obj)
                    
                      
                    
                }}

                onIconPress={() => {
                    
                        
                        var obj  = {}
                        obj[key] = val
                        this.setState(obj)
                     
                }}
            />);
            
    }

    componentWillMount() {
        this.getTelaAtual()
    }
    
    getTelaAtual = () => { 
        try {
            AsyncStorage.getItem('tela')
                .then((value) => {
                    if (value === '3') {
                        
                        this.setState({ telaAtual: '-1' })
                    }
                    else {
                        this.setState({ telaAtual: value })
                    }
                });
        }
        catch (error) {
            Alert.alert('Atenção', 'Ocorreu um erro, tente novamente.')
            console.log(error);
        }
    }

    render() {

        var actOptions = [

            {
                icon: 'headphones',
                title: 'Televendas',
                key: 'televendas',
                status: this.state.televendas
            },
            
             {
                icon: 'home',
                 title: 'Local Fisico',
                 key: 'local',
                 status: this.state.local
            },

            {
                icon: 'archive',
                title: 'Correio',
                key: 'correio',
                status: this.state.correio
            },

             {
                icon: 'signal',
                 title: 'Internet',
                 key: 'internet',
                 status: this.state.internet
            },

             {
                icon: 'shopping-cart',
                 title: 'Fora da loja',
                 key: 'foraLoja',
                 status: this.state.foraLoja
            },

             {
                icon: 'desktop',
                 title: 'Máquinas Auto.',
                 key: 'maquina',
                 status: this.state.maquina
            }

        ]
        
        return (
            <View style={styles.container}>
                <Header headerText={'Abrir minha MEI'} />
                <View style={{flex:1, margin: 10, marginTop: 100}}>
                    <View
                        style={{
                            flex: 2,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text style={styles.mainTitle}>Escolha forma de atuação:</Text>
                        <FlatList
                                numColumns={2}
                                data={actOptions}
                                renderItem={(item) => this._renderItem(item)}/>
                   
                    </View>
                    <View style={{ flex: 1 }} >
                    
                         <CustomButton Titulo={'Próximo Passo'} Screen={this.ChooseScreen}/>
                    
                    </View>
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
        fontWeight: 'bold',
        color: '#0288D1',
        marginBottom: 50
    },

    checkboxContainer: {
        width: 160,
        height: 60,
        elevation: 2,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
    
    });