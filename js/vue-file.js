new Vue({

    el: '#app',
    data: {
        msg: 'Teste de mensagem',
        ehVerdade: true,
        frutas: ['Pera', 'Uva', 'Maçã'],
        aluno: {
            nome: 'Alex',
        },
        num1: 1,
        fun1: function() {
            return 'Mensagem da função 1';
        },
        fun2: () => {
            return 'Mensagem da função 2';
        }
    },   
    methods: {
        fun3(i) {
            return "Frutas: " + this.frutas[i];
        },
    } 

});