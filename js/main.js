function compararDatas() {
    var date1 = new Date(document.getElementById("date1").value);
    var date2 = new Date(document.getElementById("date2").value);
    date1 = DiaSeguinte(date1);
    date2 = DiaSeguinte(date2);
    var maiorData = maiorEntre(date1, date2);
    var intervalo = calcularIntervalo(date1, date2);
    var dataAtual = DataAtual();

    var resultado;

    if (intervalo === 1) {
        resultado = "A data maior é: " + formatarData(maiorData) + "<br>" +
        "O intervalo entre as datas é de 1 dia.";
    } else {
        if(date1<date2){
            resultado = "A data maior é: " + formatarData(maiorData) + "<br>" +
                        "O intervalo entre as datas é de " + intervalo + " dias.";
        }else{
            resultado = "A data maior é: " + formatarData(maiorData) + "<br>" +
                        "Erro: O primeiro parâmetro deve ser uma data mais antiga que o segundo";
        }
    }

    document.getElementById("resultado").innerHTML = resultado + "<br>" +
                                                       "Data atual é: " + dataAtual;
}

function maiorEntre(date1, date2) {
    if (date1 > date2) {
        return date1;
    } else {
        return date2;
    }
}

function formatarData(date) {
    var options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };
    var dataFormatada = date.toLocaleDateString('pt-BR', options);
    return dataFormatada;
}

function DiaSeguinte(date) {
    var diaSeguinte = new Date(date);
    diaSeguinte.setDate(diaSeguinte.getDate() + 1);
    return diaSeguinte;
}

function calcularIntervalo(date1, date2) {
    var diff = date2.getTime() - date1.getTime();
    var diffEmDias = diff / (1000 * 3600 * 24);
    return diffEmDias;
}

function DataAtual() {
    var dataAtual = new Date();
    var hora = formatarNumero(dataAtual.getHours());
    var minuto = formatarNumero(dataAtual.getMinutes());
    var dia = formatarNumero(dataAtual.getDate());
    var mes = formatarNumero(dataAtual.getMonth() + 1);
    var ano = dataAtual.getFullYear();

    var dataFormatada = hora + ":" + minuto + " - " + dia + "/" + mes + "/" + ano;
    return dataFormatada;
}

function formatarNumero(numero) {
    if (numero < 10) {
        return '0' + numero;
    } else {
        return numero;
    }
}
