
/* Telas:
    -HomeScreen
    -AreaTrabalho
    -Form
    -Form2

*/
const Config = {
    telas: [
        {
            tela: 'HomeScreen'
        },
        {
            tela: 'AreaTrabalho'
        },
        {
            tela: 'Form'
        },
        {
            tela: 'Form2'
        },

    ],
    atuacoes: [

        {
            icon: 'headphones',
            title: 'Televendas',
            key: 'televendas',
            status: false
        },
        
         {
            icon: 'home',
             title: 'Local Fisico',
             key: 'local',
             status: false
        },

        {
            icon: 'archive',
            title: 'Correio',
            key: 'correio',
            status: false
        },

         {
            icon: 'signal',
             title: 'Internet',
             key: 'internet',
             status: false
        },

         {
            icon: 'shopping-cart',
             title: 'Fora da loja',
             key: 'fora',
             status: false
        },

         {
            icon: 'desktop',
             title: 'Máquinas Auto.',
             key: 'maquina',
             status: false
        }

    ],

    areas: [
        {  
          name: 'Autonomo',
          id: 'Autonomo',
          children: [{
              name: 'Revendedor',
              id: 'Revendedor',
            },{
              name: 'Fisioterapeuta',
              id: 'Fisioterapeuta',
            },{
              name: 'Manicure',
              id: 'Manicure',
            },]
        },
        {  
            name: 'Assalariado',
            id: 'Assalariado',
            children: [{
                name: 'Vendedor',
                id: 'Vendedor',
              },{
                name: 'Médico',
                id: 'Médico',
              },{
                name: 'Recepção',
                id: 'Recepção',
              },]
        },
        {  
            name: 'Estudante',
            id: 'Estudante',
            children: [{
                name: 'Médio',
                id: 'Médio',
              },{
                name: 'Superior',
                id: 'Superior',
              },{
                name: 'Estágio',
                id: 'Estágio',
              },]
          }],

    perguntas: [
        {   key: 'rg',
            title: 'Rg',
            kind: 'input'
        },
        {
            key:'email',
            title: 'E-mail',
            kind: 'input'
        },
        {
            key: 'estado',
            title: 'Estado Emissor',
            kind: 'picker'
        },
        {
            key: 'orgao',
            title: 'Orgão Emissor',
            kind: 'picker'
        }
    ],

    estados: [
        {
            key: '...'
        },
        {
            key: 'Al'
        },
        {
            key: 'Ba'
        },
        {
            key: 'Ce'
        },
        {
            key: 'Se'
        },
        {
            key: 'Rj'
        },
    ],

    orgaos: [
        {
            key: '...'
        },
        {
            key: 'SSP'
        },
        {
            key: 'Forum'
        },
        {
            key: 'Delegacia'
        },
        {
            key: 'SAC'
        },
        {
            key: 'HP'
        },
    ]
}

export default Config;
