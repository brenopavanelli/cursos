function main() {
    const data = new Date();

    const diaDoMes = data.getDate();
    const diaDaSemana = definirDiaDaSemana(data.getDay());
    const mes = definirMesDoAno(data.getMonth());
    const ano = data.getFullYear();
    const horas = adicionarZeroEsquerda(data.getHours());
    const minutos = adicionarZeroEsquerda(data.getMinutes());

    console.log(`${diaDaSemana}, ${diaDoMes} de ${mes} de ${ano} ${horas}:${minutos}`);

    function definirDiaDaSemana(diaDaSemana) {
        switch (diaDaSemana) {
            case 0: 
                diaDaSemana = 'domingo';
                return diaDaSemana;
            case 1: 
                diaDaSemana = 'segunda-feira';
                return diaDaSemana;
            case 2: 
                diaDaSemana = 'terça-feira';
                return diaDaSemana;
            case 3: 
                diaDaSemana = 'quarta-feira';
                return diaDaSemana;
            case 4: 
                diaDaSemana = 'quinta-feira';
                return diaDaSemana;
            case 5: 
                diaDaSemana = 'sexta-feira';
                return diaDaSemana;
            case 6: 
                diaDaSemana = 'sábado';
                return diaDaSemana;
        }
    }

        function definirMesDoAno(mes) {
        switch (mes) {
            case 0: 
                mes = 'janeiro';
                return mes;
            case 1: 
                mes = 'fevereiro';
                return mes;
            case 2: 
                mes = 'março';
                return mes;
            case 3: 
                mes = 'abril';
                return mes;
            case 4: 
                mes = 'maio';
                return mes;
            case 5: 
                mes = 'junho';
                return mes;
            case 6: 
                mes = 'julho';
                return mes;
            case 7: 
                mes = 'agosto';
                return mes;
            case 8: 
                mes = 'setembro';
                return mes;
            case 9: 
                mes = 'outubro';
                return mes;
            case 10: 
                mes = 'novembro';
                return mes;
            case 11: 
                mes = 'dezembro';
                return mes;
        }
    }

    

}
main();